import { Col, PageHeader, Row } from 'antd';
import React from 'react';
import HomeForm from '../forms/HomeForm';
import HomeImage from '../imageMessage/HomeImage';
import { Footer } from 'antd/lib/layout/layout';
import { PhoneFilled } from '@ant-design/icons';

function HomePage() {
    return (
        <div>
            <Row align="middle">
                <Col span={12} className='background-image' xs={24} md={12}>
                    <PageHeader
                        ghost={false}
                        extra={[
                            <label>{'¿Tienes alguna duda?'}</label>,
                            <PhoneFilled />,
                            <a href="tel:(01)4116001">{'(01) 411 6001'}</a>
                        ]}
                        avatar={{ 
                            className:'ant-layout-header',
                            src: 'https://www.rimac.com/content/dam/rimac/publica/rimac/menu/logo-red-rimac.svg' }}
                    >
                    </PageHeader>
                    <HomeImage />
                    <Footer className='footer-text'>© 2020 RIMAC Seguros y Reaseguros.</Footer>
                </Col>
                <Col span={12} xs={24} md={12}>
                    <HomeForm />
                </Col>
            </Row>
        </div>
    );
}

export default HomePage;
