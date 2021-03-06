import React, { FunctionComponent, useState } from 'react';
import { Col, Progress, Row, Steps, Typography } from 'antd';
import CarDetailsForm from '../forms/CarDetailsForm';
import CarPlanForm from '../forms/CarPlanForm';
import DescriptionPlan from '../forms/DescriptionPlan';
import DescriptionPlanStep2 from '../forms/DescriptionPlanStep2';

const { Step } = Steps;
const { Text } = Typography;

interface CarDetailsProps {
    returnPage: () => void,
    finalPage: () => void
}

const CarDetailsPage: FunctionComponent<CarDetailsProps> = (props) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [amount, setAmount] = useState(20);
    const [bodyAmount, setBodyAmount] = useState({ step1: true, step2: true, step3: true });
    const [userBody, setUserBody] = useState({
        Year: '2019',
        Brand: 'Wolkswagen',
        IsGas: false,//True = SI, False = NO
        RadioValue: 2,
        Amount: 14300,
        Plate: JSON.parse(localStorage.getItem('UserBody')!).Plate
    });

    const returnStep = () => {
        setCurrentStep(0);
    }
    const nextStep = () => {
        setCurrentStep(1);
    }
    const updateUserBody = (obj: any) => {
        if (obj != null) {
            setUserBody(obj);
        }
    }
    const updateBodyAmount = (obj: any) => {
        if (obj != null) {
            setBodyAmount(obj);
        }
    }
    const addAmount = (plan: any) => {
        let value = amount;
        switch (plan) {
            case 'parcial':
                value = value + 15;
                setAmount(value);
                break;
            case 'choque':
                value = value + 20;
                setAmount(value);
                break;
            case 'perdida':
                value = value + 50;
                setAmount(value);
                break;
            default:
                break;
        }
    }
    const removeAmount = (plan: any) => {
        let value = amount;
        switch (plan) {
            case 'parcial':
                value = value - 15;
                setAmount(value);
                break;
            case 'choque':
                value = value - 20;
                setAmount(value);
                break;
            case 'perdida':
                value = value - 50;
                setAmount(value);
                break;
            default:
                break;
        }
    }
    return (
        <div>
            <Row>
                <Col className='page-image' xs={24} md={8}>
                    <Steps className='margin-l margin-r pt-30' direction="vertical" current={currentStep}>
                        <Step title="Datos del auto" />
                        <Step title="Arma tu Plan" />
                    </Steps>
                </Col>
                <Col className='steps-mobile pt-20' span={24}>
                    <Row className='w-80 progress-bar'>
                        <Col span={8}>
                            <Text>Paso {currentStep + 1} de 2</Text>
                        </Col>
                        <Col span={16}>
                            <Progress percent={currentStep * 50} showInfo={false} />
                        </Col>
                    </Row>
                </Col>
                <Col offset={8} xs={24} md={10}>
                    {currentStep === 0 && <CarDetailsForm returnPage={props.returnPage} nextStep={nextStep} userBody={userBody} updateUserBody={updateUserBody} />}
                    {currentStep === 1 && <CarPlanForm returnPage={returnStep} addAmount={addAmount} removeAmount={removeAmount} userBody={userBody} bodyAmount={bodyAmount} updateBodyAmount={updateBodyAmount} />}
                </Col>
                <Col className='margin-content-tb pt-10' xs={24} md={4}>
                    {currentStep === 0 && <DescriptionPlan />}
                    {currentStep === 1 && <DescriptionPlanStep2 amount={amount} finalPage={props.finalPage} />}
                </Col>
            </Row>
        </div>
    );
}

export default CarDetailsPage;
