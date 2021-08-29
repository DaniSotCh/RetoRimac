import { Col, PageHeader, Row } from 'antd';
import React, { FunctionComponent } from 'react';
import HomeForm from '../forms/HomeForm';
import HomeImage from '../imageMessage/HomeImage';
import { Footer } from 'antd/lib/layout/layout';
import { PhoneFilled } from '@ant-design/icons';

interface HomeProps{
    nextPage:()=>void
}

const HomePage: FunctionComponent<HomeProps> = (props) => {
    return (
        <div>
            <Row align="middle">
                <Col span={12} className='background-image' xs={24} md={12}>
                    <HomeImage />
                    <Footer className='footer-text'>© 2020 RIMAC Seguros y Reaseguros.</Footer>
                </Col>
                <Col span={12} xs={24} md={12}>
                    <HomeForm successQuote={props.nextPage}/>
                </Col>
            </Row>
        </div>
    );
}

export default HomePage;
