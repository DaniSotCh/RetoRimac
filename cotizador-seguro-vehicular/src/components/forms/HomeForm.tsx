import React, { useState } from 'react';
import { Typography ,Input, Select, Button, Row, Col } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import Dropdown from '../shared/Dropdown';

const { Option } = Select;
const { Title } = Typography;

function HomeForm() {
    const [documentTypeList]=useState([
        {label:'DNI',value:'DNI'},
        {label:'C.E.',value:'C.E.'}
    ])
    const [documentType,setDocumentType]=useState('DNI')

    const onChangeCheck = (event: any) => {
        //event.target.checked
    }
    const onChangeDocumentType = (value: any) => {
        setDocumentType(value);
    }
    return (
        <div>
            <Row>
                <Col span={12} offset={3}>

                    <Title level={3}>Déjanos tus datos</Title>
                    <Input addonBefore={<Dropdown optionsList={documentTypeList} onChange={onChangeDocumentType} value={documentType}/>} placeholder={'Nro. de doc'} />

                    <Input placeholder="Celular" />
                    <Input placeholder="Placa" />
                    <Checkbox onChange={onChangeCheck}>Acepto la <a>Política de Protección de Datos Personales</a> y los <a>Términos y Condiciones</a>.</Checkbox>

                    <Button type="primary" shape="round" size={'large'} danger>Cotizar</Button>
                </Col>
            </Row>
        </div>
    );
}

export default HomeForm;
