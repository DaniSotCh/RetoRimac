import React, { FunctionComponent, useEffect, useState } from 'react';
import { Modal, Typography, Input, Button, Row, Col, PageHeader, Radio, Divider, InputNumber, Card } from 'antd';
import Dropdown from '../shared/Dropdown';
import { LeftCircleOutlined, RightOutlined } from '@ant-design/icons';
import { formatValidInputClass, validInputClass } from '../../resources/PackageHelper';
import imgUrl from '../../styles/images/rightImage.png';

const { Text } = Typography;

interface CarDetailsProps {
    returnPage: () => void
}
const CarPlanForm: FunctionComponent<CarDetailsProps> = (props) => {
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
        let objUser = JSON.parse(localStorage.getItem('UserBody')!);
        setContactName(localStorage.getItem('UserName')!);
        //body: "{\"DocumentType\":\"DNI\",\"NrDocument\":\"79256984\",\"PhoneNumber\":\"949498494\",\"Plate\":\"EEE984\",\"TermsCond\":true}"
    })

    const isValid = () => {
        setValidates({
            year: validInputClass(year),
            brand: validInputClass(brand),
            amount: validInputClass(amount.toString())
        })
        return (validInputClass(year) && validInputClass(brand) && validInputClass(amount.toString()));
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
        setAmount(value != null ? value : 0);
    }
    const onContinueClick = (value: any) => {
        if (isValid()) {
            let model = {
                Year: year,
                Brand: brand,
                IsGas: isGas,//True = SI, False = NO
                Amount: amount
            }
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
            <Row>
                <Col span={24} offset={1}>
                    <PageHeader
                        onBack={props.returnPage}
                        title="Volver"
                        backIcon={<LeftCircleOutlined />}
                    />
                </Col>
                <Col span={24} offset={2}>
                    <Text className='title04'>Mira las coberturas</Text><br></br>
                    <Text className='subtitle02'>Conoce las coberturas para tu plan</Text>

                    <Card className='w-80'>
                        <Row>
                            <Col span={14}>
                                <p className='rob-text'>Placa: C2U-114</p>
                                <p className='subtitle06'>Wolkswagen 2019 Golf</p>
                                <Button type="link" className='link-text' htmlType="button" onClick={props.returnPage}>editar</Button>
                            </Col>
                            <Col span={10}>
                                <img alt='' width='112' src={imgUrl}></img>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col span={24} offset={2}>
                    <Text className='subtitle06'>Agrega o quita coberturas</Text>
                </Col>
            </Row>
        </div>
    );
}

export default CarPlanForm;
