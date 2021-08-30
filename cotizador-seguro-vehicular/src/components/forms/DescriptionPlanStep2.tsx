import React, { FunctionComponent, useEffect, useState } from 'react';
import { List, Col, Divider, Row, Steps, Typography, Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { formatToCurrency } from '../../resources/PackageHelper';

const { Step } = Steps;
const { Text } = Typography;

interface CarDetailsProps {
    iWantPlan: () => void,
    amount?: any
}

const DescriptionPlanStep2: FunctionComponent<CarDetailsProps> = (props) => {
    const [list] = useState([
        { title: 'Llanta de respuesto' },
        { title: 'Analisis de motor' },
        { title: 'Aros gratis' }
    ]);
    const [amount, setAmount] = useState('20');
    useEffect(() => {
        if (props.amount != null) {
            setAmount(props.amount);
        }
    }, [props.amount]);
    const onWantClick = (event: any) => {
        props.iWantPlan();
    }
    return (
        <div>
            <Row>
                <Col span={12}>
                    <Text className='title05'>{'$' + formatToCurrency(amount)}</Text><br></br>
                    <Text className='subtitle03'>mensuales</Text>
                </Col>
                <Col span={12}>
                    <img alt='' width='64' src='https://www.rimac.com/content/dam/rimac/publica/rimac/menu/Vehicular.png'></img>
                </Col>
            </Row>
            <Divider />
            <Text className='regular-font'>El precio incluye:</Text><br></br>
            <List
                itemLayout="horizontal"
                dataSource={list}
                split={false}
                renderItem={(item: any) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<CheckOutlined />}
                            title={item.title}
                        />
                    </List.Item>
                )}
            />
            <Button className='button-red' type='primary' onClick={onWantClick}>LO QUIERO</Button>
        </div>
    );
}

export default DescriptionPlanStep2;
