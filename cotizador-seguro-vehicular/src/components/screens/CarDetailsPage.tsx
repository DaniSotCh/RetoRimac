import React, { FunctionComponent } from 'react';
import { Button, Col, Divider, Row, Steps, Typography } from 'antd';
import { PhoneFilled } from '@ant-design/icons';
import CarDetailsForm from '../forms/CarDetailsForm';

const { Step } = Steps;
const { Text } = Typography;

interface CarDetailsProps{
    returnPage:()=>void
}

const CarDetailsPage: FunctionComponent<CarDetailsProps> = (props) => {
    return (
        <div>
            <Row align="top">
                <Col span={8} className='background-image' xs={24} md={8}>
                    <Steps className='margin-l margin-r pt-30' direction="vertical" current={0}>
                        <Step title="Datos del auto" />
                        <Step title="Arma tu Plan" />
                    </Steps>
                </Col>
                <Col span={8} xs={24} md={8}>
                    <CarDetailsForm returnPage={props.returnPage}/>
                </Col>
                <Col className='margin-content-tb pt-10' span={4} xs={24} md={4}>
                    <Text className='subtitle01'>Ayuda</Text>
                    <Divider />
                    <Row>
                        <Col span={12}>
                            <Text className='regular-font'>¿No encuentras el modelo?</Text><br></br>
                            <Button type="link" className='link-text' htmlType="button">clic aquí</Button>
                        </Col>
                        <Col span={12}>
                            <img alt='' width='64' src='https://www.rimac.com/content/dam/rimac/publica/rimac/menu/Vehicular.png'></img>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default CarDetailsPage;
