import React, { FunctionComponent, useState } from 'react';
import { Button, Col, Divider, Row, Steps, Typography } from 'antd';
import CarDetailsForm from '../forms/CarDetailsForm';
import CarPlanForm from '../forms/CarPlanForm';

const { Step } = Steps;
const { Text } = Typography;

function DescriptionPlan(){
    return (
        <div>
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
        </div>
    );
}

export default DescriptionPlan;
