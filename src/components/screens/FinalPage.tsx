import { Button, Col, Row } from 'antd';
import React, { FunctionComponent } from 'react';
import { Footer } from 'antd/lib/layout/layout';
import Text from 'antd/lib/typography/Text';
import finalImage from '../../styles/images/finalImage.png'

interface FinalProps {
    returnHome:()=>void
}

const FinalPage: FunctionComponent<FinalProps> = (props) => {
    return (
        <div>
            <Row align="middle">
                <Col span={8} className='background-image' xs={24} md={8}>
                    <img alt='' className='ml-85 w-30 pt-50 transform-img-03' src={finalImage}></img>

                    <Footer className='footer-text'>© 2020 RIMAC Seguros y Reaseguros.</Footer>
                </Col>
                <Col className='details-form-01' offset={3} span={8} xs={24} md={8}>
                    <Text className='title04'><label className='text-red'>¡Te damos la bienvenida!</label><br></br>
                        Cuenta con nosotros para proteger tu vehículo</Text><br></br>
                    <Text className='subtitle02'>Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:<br></br>
                        <b>joel.sanchez@gmail.com</b></Text><br></br>
                    <Button className='button-red' type='primary' onClick={props.returnHome}>CÓMO USAR MI SEGURO</Button>
                </Col>
            </Row>
        </div>
    );
}

export default FinalPage;
