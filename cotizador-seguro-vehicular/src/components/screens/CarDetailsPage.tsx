import React, { FunctionComponent, useState } from 'react';
import { Button, Col, Divider, Row, Steps, Typography } from 'antd';
import CarDetailsForm from '../forms/CarDetailsForm';
import CarPlanForm from '../forms/CarPlanForm';
import DescriptionPlan from '../forms/DescriptionPlan';
import DescriptionPlanStep2 from '../forms/DescriptionPlanStep2';

const { Step } = Steps;
const { Text } = Typography;

interface CarDetailsProps{
    returnPage:()=>void
}

const CarDetailsPage: FunctionComponent<CarDetailsProps> = (props) => {
    const [currentStep, setCurrentStep] = useState(0);

    const returnStep = () => {
        setCurrentStep(0);
    }
    const nextStep = () => {
        setCurrentStep(1);
    }
    const iWantPlan = () => {

    }
    return (
        <div>
            <Row align="top">
                <Col span={8} className='background-image' xs={24} md={8}>
                    <Steps className='margin-l margin-r pt-30' direction="vertical" current={currentStep}>
                        <Step title="Datos del auto" />
                        <Step title="Arma tu Plan" />
                    </Steps>
                </Col>
                <Col span={8} xs={24} md={8}>
                    {currentStep === 0 && <CarDetailsForm returnPage={props.returnPage} nextStep={nextStep}/>}
                    {currentStep === 1 && <CarPlanForm returnPage={returnStep} />}
                </Col>
                <Col className='margin-content-tb pt-10' span={4} xs={24} md={4}>
                    {currentStep === 0 && <DescriptionPlan/>}
                    {currentStep === 1 && <DescriptionPlanStep2 iWantPlan={iWantPlan}/>}
                </Col>
            </Row>
        </div>
    );
}

export default CarDetailsPage;
