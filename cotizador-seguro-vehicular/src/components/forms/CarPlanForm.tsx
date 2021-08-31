import React, { FunctionComponent, useEffect, useState } from 'react';
import { Typography, Button, Row, Col, PageHeader, Card, Tabs } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';
import CollapseForm from '../shared/CollapseForm';

const { Text } = Typography;
const { TabPane } = Tabs;

interface CarDetailsProps {
    returnPage: () => void,
    addAmount: (index: any) => void,
    removeAmount: (index: any) => void,
    userBody: any,
    bodyAmount: any,
    updateBodyAmount: (index: any) => void,
}
const CarPlanForm: FunctionComponent<CarDetailsProps> = (props) => {
    const[plate,setPlate]=useState('')
    const[year,setYear]=useState('')
    const[brand,setBrand]=useState('')

    useEffect(() => {
        if (props.userBody != null) {
            setPlate(props.userBody.Plate);
            setYear(props.userBody.Year);
            setBrand(props.userBody.Brand);
        }
    }, [props.userBody]);

    function callback(key: any) {
        console.log(key);
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
                    <Text className='title04'>Mira las coberturas</Text><br></br>
                    <Text className='subtitle02'>Conoce las coberturas para tu plan</Text>

                    <Card className='background-2page'>
                        <p className='rob-text'>{'Placa: ' + plate}</p>
                        <p className='subtitle06'>{brand + ' ' + year}</p>
                        <Button type="link" className='link-text' htmlType="button" onClick={props.returnPage}>editar</Button>
                    </Card>
                </Col>
                <Col span={24} offset={2}>
                    <Text className='subtitle06 m-tb'>Agrega o quita coberturas</Text>
                    {/*---------------TABS-----------------*/}
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Protege a tu auto" key="1">
                            <CollapseForm addAmount={props.addAmount} removeAmount={props.removeAmount} bodyAmount={props.bodyAmount} updateBodyAmount={props.updateBodyAmount}/>
                        </TabPane>
                        <TabPane tab="Protege a los que te rodean" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Mejora tu plan" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        </div>
    );
}

export default CarPlanForm;
