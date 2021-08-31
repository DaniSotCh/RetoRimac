import React, { FunctionComponent, useEffect, useState } from 'react';
import { Modal, Typography, Button, Row, Col, PageHeader, Radio, Divider, InputNumber, Card } from 'antd';
import Dropdown from '../shared/Dropdown';
import { LeftCircleOutlined, RightOutlined } from '@ant-design/icons';
import { formatValidInputClass, validInputClass } from '../../resources/PackageHelper';

const { Text } = Typography;

interface CarDetailsProps {
    returnPage: () => void,
    nextStep: () => void,
    updateUserBody: (index: any) => void,
    userBody:any
}

const CarDetailsForm: FunctionComponent<CarDetailsProps> = (props) => {
    const [yearList] = useState([
        { label: '2010', value: '2010' },
        { label: '2011', value: '2011' },
        { label: '2012', value: '2012' },
        { label: '2013', value: '2013' },
        { label: '2014', value: '2014' },
        { label: '2015', value: '2015' },
        { label: '2016', value: '2016' },
        { label: '2017', value: '2017' },
        { label: '2018', value: '2018' },
        { label: '2019', value: '2019' },
        { label: '2020', value: '2020' },
        { label: '2021', value: '2021' },
    ])
    const [brandList] = useState([
        { label: 'Wolkswagen', value: 'Wolkswagen' },
        { label: 'Suzuki', value: 'Suzuki' }
    ])

    const [contactName, setContactName] = useState('');
    const [year, setYear] = useState('2019');
    const [brand, setBrand] = useState('Wolkswagen');
    const [isGas, setIsGas] = useState(false);
    const [radioValue, setRadioValue] = useState(2);
    const [amount, setAmount] = useState(14300);
    const [validates, setValidates] = useState({
        year: true,
        brand: true,
        amount: true
    });

    useEffect(() => {
            setContactName(localStorage.getItem('UserName')!);
    }, []);

    useEffect(() => {
        if (props.userBody !== null) {
            setYear(props.userBody.Year);
            setBrand(props.userBody.Brand);
            setIsGas(props.userBody.IsGas);
            setRadioValue(props.userBody.RadioValue);
            setAmount(props.userBody.Amount);
        }
    }, [props.userBody]);

    const isValid = () => {
        setValidates({
            year: validInputClass(year),
            brand: validInputClass(brand),
            amount: validInputClass(amount != null ? amount.toString() : '')
        })
        return (validInputClass(year) && validInputClass(brand) && validInputClass(amount != null ? amount.toString() : ''));
    }

    const onChangeCheck = (event: any) => {
        setRadioValue(event.target.value);
        setIsGas(event.target.value === 1 ? true : false);
    }
    const onChangeYear = (value: any) => {
        setValidates({ ...validates, year: true });
        setYear(value);
    }
    const onChangeBrand = (value: any) => {
        setValidates({ ...validates, brand: true });
        setBrand(value);
    }
    const onChangeAmount = (value: any) => {
        setValidates({ ...validates, amount: true });
        setAmount(value);
    }
    const onContinueClick = (value: any) => {
        if (isValid()) {
            let model = {
                Year: year,
                Brand: brand,
                IsGas: isGas,//True = SI, False = NO
                RadioValue: radioValue,
                Amount: amount,
                Plate: JSON.parse(localStorage.getItem('UserBody')!).Plate
            };
            props.updateUserBody(model);
            props.nextStep();
        } else {
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
            <Row className='details-form-01 w-80'>
                <Col span={24} offset={1}>
                    <PageHeader
                        onBack={props.returnPage}
                        title="Volver"
                        backIcon={<LeftCircleOutlined />}
                    />
                </Col>
                <Col span={24} offset={2}>
                    <Text className='title04'>¡Hola, <label className='text-red'>{contactName}</label>!</Text><br></br>
                    <Text className='subtitle02'>Completa los datos de tu auto</Text>
                    
                    <Dropdown
                        placeholder='Año'
                        className={'margin-input w-80 ' + formatValidInputClass(validates.year)}
                        optionsList={yearList}
                        onChange={onChangeYear}
                        value={year} />
                    <Dropdown
                        placeholder='Marca'
                        className={'margin-input w-80 ' + formatValidInputClass(validates.brand)}
                        optionsList={brandList}
                        onChange={onChangeBrand}
                        value={brand} />

                </Col>
                <Col span={24} className='details-01-mobile'>
                    <div>
                        <Card className='card-details-01'>
                            <Row>
                                <Col span={12}>
                                    <img alt='' width='64' src='https://www.rimac.com/content/dam/rimac/publica/rimac/menu/Vehicular.png'></img>
                                </Col>
                                <Col span={12}>
                                    <Text className='regular-font'>¿No encuentras el modelo?</Text><br></br>
                                    <Button type="link" className='link-text' htmlType="button">clic aquí</Button>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </Col>
                <Col span={24} offset={2}>
                    <Row className='m-tb' >
                        <Col xs={24} md={15} >
                            <Text className='regular-font'>¿Tu auto es gas?</Text>
                        </Col>
                        <Col xs={24} md={8} >
                            <Radio.Group onChange={onChangeCheck} value={radioValue}>
                                <Radio value={1}>Si</Radio>
                                <Radio value={2}>No</Radio>
                            </Radio.Group>
                        </Col>
                    </Row>
                </Col>
                <Divider orientation='center' />
                <Col span={24} offset={2}>
                    <Row>
                        <Col xs={24} md={12} >
                            <Text className='regular-font'>Indica la suma asegurada</Text><br></br>
                            <Text className='title13'>min $12,500</Text>
                            <Divider type='vertical' />
                            <Text className='title13'>max $16,500</Text>
                        </Col>
                        <Col xs={24} md={7}  >
                            <InputNumber
                                value={amount}
                                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')}
                                onChange={onChangeAmount}
                                step={100}
                                min={12500}
                                max={16500}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col span={24} offset={2}>
                    <Button className='button-red' type='primary' onClick={onContinueClick}>CONTINUAR<RightOutlined /></Button>
                </Col>
                </Row>
        </div>
    );
}

export default CarDetailsForm;
