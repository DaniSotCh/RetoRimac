import { Col, Row } from 'antd';
import React, { FunctionComponent } from 'react';
import HomeForm from '../forms/HomeForm';
import HomeImage from '../imageMessage/HomeImage';

interface HomeProps {
    nextPage: () => void
}

const HomePage: FunctionComponent<HomeProps> = (props) => {
    return (
        <Row align="middle">
            <Col className='background-image' xs={24} sm={24} md={24} lg={12} xl={10} xxl={8}>
                <HomeImage />
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} offset={3}>
                <HomeForm successQuote={props.nextPage} />
            </Col>
        </Row>
    );
}

export default HomePage;
