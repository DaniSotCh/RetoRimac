import React, { useState } from 'react';
import {Modal, Typography, Input, Select, Button, Row, Col } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import Dropdown from '../shared/Dropdown';
import { formatValidInputClass, validInputClass } from '../../resources/PackageHelper';

const { Text } = Typography;

function HomeForm() {
    const [documentTypeList] = useState([
        { label: 'DNI', value: 'DNI' },
        { label: 'C.E.', value: 'C.E.' }
    ])
    const [documentType, setDocumentType] = useState('DNI');
    const [nrDocument, setNrDocument] = useState('');
    const [termsCond, setTermsCond] = useState(true);
    const [phone, setPhone] = useState('');
    const [plate, setPlate] = useState('');
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
        setValidates({ ...validates, nrDocument: true });
        setNrDocument(event.target.value);
    }
    const onChangePhone = (event: any) => {
        setValidates({ ...validates, phone: true });
        setPhone(event.target.value);
    }
    const onChangePlate = (event: any) => {
        setValidates({ ...validates, plate: true });
        setPlate(event.target.value);
    }
    const onQuoteClick = (value: any) => {
        if(isValid()){

        }else{
            modalError();
        }
    }
    function modalError() {
        Modal.error({
          title: 'Error',
          content: 'Por favor, complete los campos obligatorios'
        });
      }
    return (
        <div className="margin-content-tb">
            <Row justify="space-around" align="middle">
                <Col span={12} offset={1}>
                    <Text className='title05'>Déjanos tus datos</Text>
                    <Input
                        className={'margin-input '+ formatValidInputClass(validates.nrDocument)}
                        addonBefore={
                            <Dropdown
                                className={formatValidInputClass(validates.documentType)}
                                optionsList={documentTypeList}
                                onChange={onChangeDocumentType}
                                value={documentType} />}
                        placeholder={'Nro. de doc'}
                        onChange={onChangeNrDocument} 
                        value={nrDocument}
                        />

                    <Input className={'margin-input '+ formatValidInputClass(validates.phone)} placeholder="Celular" onChange={onChangePhone} value={phone} />
                    <Input className={'margin-input '+ formatValidInputClass(validates.plate)} placeholder="Placa" onChange={onChangePlate} value={plate} />
                    <Checkbox className={'margin-input '+ formatValidInputClass(validates.termsCond)} onChange={onChangeCheck} checked={termsCond}>Acepto la <a>Política de Protección de Datos Personales</a> y los <a>Términos y Condiciones</a>.</Checkbox>

                    <Button className='button-red' type='primary' onClick={onQuoteClick}>Cotízalo</Button>
                </Col>
            </Row>
        </div>
    );
}

export default HomeForm;
