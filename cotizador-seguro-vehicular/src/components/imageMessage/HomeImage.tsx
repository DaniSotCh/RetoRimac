import { Col, PageHeader, Row } from 'antd';
import React from 'react';

function HomeImage() {
    return (
        <div className='margin-l margin-r'>
            <Row>
                <Col span={24}><img className='w-100 pt-50' src={'https://www.rimac.com/content/dam/rimac/publica/pdp-vehicular/personaje.svg'}></img></Col>
            </Row>
            <Row>
                <Col span={24}><label className='title12'>¡NUEVO!</label></Col>
                <Col span={24}><label className='title04'>Seguro <label className='text-red'>Vehicular Tracking</label></label></Col>
                <Col span={24}><label className='paragraph2'>Cuentanos donde le haras seguimiento a tu seguro</label></Col>
            </Row>
        </div>
    );
}

export default HomeImage;
