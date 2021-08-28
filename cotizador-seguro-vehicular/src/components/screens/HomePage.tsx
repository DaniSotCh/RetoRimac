import { Col, PageHeader, Row } from 'antd';
import React from 'react';
import HomeForm from '../forms/HomeForm';
import { PhoneFilled } from '@ant-design/icons';

function HomePage() {
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                //title="Title"
                //subTitle="This is a subtitle"
                extra={[
                    <label>{'¿Tienes alguna duda?'}</label>,
                    <PhoneFilled/>,
                    <a href="tel:(01)4116001">{'(01) 411 6001'}</a>
                ]}
                avatar={{src:'https://www.rimac.com/content/dam/rimac/publica/rimac/menu/logo-red-rimac.svg'}}
            >
            </PageHeader>
            <Row>
                <Col span={12}>Imagen</Col>
                <Col span={12}>
                    <HomeForm/>
                </Col>
            </Row>
        </div>
    );
}

export default HomePage;
