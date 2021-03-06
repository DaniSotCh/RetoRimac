import React, { FunctionComponent, useState } from 'react';
import { Modal, Typography, Input, Button, Row, Col } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import Dropdown from '../shared/Dropdown';
import { formatValidInputClass, validInputClass } from '../../resources/PackageHelper';
import { saveClientQuote } from '../../networking/Networking';

const { Text } = Typography;

interface HomeFormProps {
    successQuote: () => void
}

const HomeForm: FunctionComponent<HomeFormProps> = (props) => {
    const [documentTypeList] = useState([
        { label: 'DNI', value: 'DNI' },
        { label: 'C.E.', value: 'C.E.' }
    ])
    const [documentType, setDocumentType] = useState('DNI');
    const [nrDocument, setNrDocument] = useState('');
    const [termsCond, setTermsCond] = useState(true);
    const [phone, setPhone] = useState('');
    const [plate, setPlate] = useState('');
    const [message, setMessage] = useState('Por favor, complete los campos obligatorios');
    const [validates, setValidates] = useState({
        documentType: true,
        nrDocument: true,
        termsCond: true,
        phone: true,
        plate: true
    });

    const isValid = () => {
        setValidates({
            documentType: validInputClass(documentType),
            nrDocument: validInputClass(nrDocument),
            termsCond: termsCond,
            phone: validInputClass(phone),
            plate: validInputClass(plate)
        })
        return (validInputClass(documentType) && validInputClass(nrDocument) && termsCond && validInputClass(phone) && validInputClass(plate));
    }

    const onChangeCheck = (event: any) => {
        setValidates({ ...validates, termsCond: true });
        setTermsCond(event.target.checked);
    }
    const onChangeDocumentType = (value: any) => {
        setValidates({ ...validates, documentType: true });
        setDocumentType(value);
    }
    const onChangeNrDocument = (event: any) => {
        if (event.target.value.length > 8) {
            event.target.value = event.target.value.slice(0, 8)
        }
        setValidates({ ...validates, nrDocument: true });
        setNrDocument(event.target.value);
    }
    const onChangePhone = (event: any) => {
        if (event.target.value.length > 9) {
            event.target.value = event.target.value.slice(0, 9)
        }
        setValidates({ ...validates, phone: true });
        setPhone(event.target.value);
    }
    const onChangePlate = (event: any) => {
        setValidates({ ...validates, plate: true });
        setPlate(event.target.value);
    }
    const onQuoteClick = (value: any) => {
        if (isValid()) {
            let bodyDetails = {
                DocumentType: documentType,
                NrDocument: nrDocument,
                PhoneNumber: phone,
                Plate: plate,
                TermsCond: termsCond
            }
            let model = {
                userId: 1,
                title: 'Juan',//se utilizar?? como el nombre del usuario
                body: JSON.stringify(bodyDetails),
            }
            saveClientQuote(model).then(
                (json) => {
                    setMessage('Hubo un error inesperado. Por favor, int??ntelo de nuevo');
                    if (json.httpStatusCode !== 201) {
                        modalError();
                    } else {
                        localStorage.setItem('UserBody', json.body);
                        localStorage.setItem('UserName', json.title);
                        props.successQuote()
                    }
                }
            );
        } else {
            modalError();
        }
    }
    function modalError() {
        Modal.error({
            title: 'Error',
            content: message
        });
    }
    return (
        <div className="">
            <Row justify="center" align="top">
                <Col xs={16} sm={16} md={12} lg={12} xl={12} xxl={12}>
                    <Text className='title05'>D??janos tus datos</Text>
                </Col>
            </Row>
            <Row justify="center" align="top">
                <Col xs={16} sm={16} md={12} lg={12} xl={12} xxl={12}>
                    <Input
                        className={'margin-input ' + formatValidInputClass(validates.nrDocument)}
                        addonBefore={
                            <Dropdown
                                className={formatValidInputClass(validates.documentType)}
                                optionsList={documentTypeList}
                                onChange={onChangeDocumentType}
                                value={documentType} />}
                        placeholder={'Nro. de doc'}
                        onChange={onChangeNrDocument}
                        value={nrDocument}
                        type='number'
                        maxLength={8}
                    />
                </Col>
            </Row>
            <Row justify="center" align="top">
                <Col xs={16} sm={16} md={12} lg={12} xl={12} xxl={12}>
                    <Input className={'margin-input ' + formatValidInputClass(validates.phone)} type='number' placeholder="Celular" onChange={onChangePhone} maxLength={9} value={phone} />
                </Col>
            </Row>
            <Row justify="center" align="top">
                <Col xs={16} sm={16} md={12} lg={12} xl={12} xxl={12}>
                    <Input className={'margin-input ' + formatValidInputClass(validates.plate)} placeholder="Placa" onChange={onChangePlate} maxLength={6} value={plate} />
                </Col>
            </Row>
            <Row justify="center" align="top">
                <Col xs={16} sm={16} md={12} lg={12} xl={12} xxl={12}>
                    <Checkbox className={'margin-input ' + formatValidInputClass(validates.termsCond)} onChange={onChangeCheck} checked={termsCond}>Acepto la <a href='/'>Pol??tica de Protecci??n de Datos Personales</a> y los <a href='/'>T??rminos y Condiciones</a>.</Checkbox>
                </Col>
            </Row>
            <Row justify="center" align="top">
                <Col className='button-container' xs={16} sm={16} md={12} lg={12} xl={12} xxl={12}>
                    <Button className='button-red' type='primary' onClick={onQuoteClick}>COT??ZALO</Button>
                </Col>
            </Row>
        </div>
    );
}

export default HomeForm;
