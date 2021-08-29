import { Select } from 'antd';
import React, { useState } from 'react';

const { Option } = Select;

interface DdwonProps {
    optionsList: any;
    className?: any;
    value?: any;
    onChange?: (event: any) => void;
    placeholder?: string;

}
const Dropdown: React.FC<DdwonProps> = (props) => {
    return (
        <div>
            <Select placeholder={props.placeholder} className={"select-before " + props.className} value={props.value} onChange={props.onChange}>
                {props.optionsList.map((element: any, index: number) => {
                    return <Option value={element.value} key={element.label + index}>{element.label}</Option>
                })}
            </Select>
        </div>
    );
}

export default Dropdown;
