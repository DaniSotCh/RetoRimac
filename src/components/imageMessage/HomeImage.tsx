import { Col, Row } from 'antd';
import React from 'react';

function HomeImage() {
    return (
        <div className='pt-20'>
            <Row className='desktop-version' justify="center" align="top">
                <Col span={24} offset={16}><img alt='' className='w-85' src={'https://www.rimac.com/content/dam/rimac/publica/pdp-vehicular/personaje.svg'}></img></Col>
                <Col span={24} offset={16}><label className='title12'>¡NUEVO!</label></Col>
                <Col span={24} offset={16}><label className='title04'>Seguro <label className='text-red'>Vehicular Tracking</label></label></Col>
                <Col span={24} offset={16}><label className='paragraph2'>Cuentanos donde le haras seguimiento a tu seguro</label></Col>
            </Row>

            <Row className='mobile-version details-form-01' align="bottom">
                <Col span={16} offset={1}>
                    <label className='title12'>¡NUEVO!</label><br></br>
                    <label className='title04'>Seguro <label className='text-red'>Vehicular Tracking</label></label><br></br>
                    <label className='paragraph2'>Cuentanos donde le haras seguimiento a tu seguro</label>
                </Col>
                <Col span={7}>
                    <img alt='' className='car-image' src={'https://www.rimac.com/content/dam/rimac/publica/pdp-vehicular/personaje.svg'}></img>
                </Col>
            </Row>
        </div>
    );
}

export default HomeImage;
