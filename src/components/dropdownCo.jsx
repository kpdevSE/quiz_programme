import {DownOutlined, SmileOutlined} from '@ant-design/icons';
import {Dropdown, Space} from 'antd';
import React from 'react';
import {CgProfile} from "react-icons/cg";
const items = [
    {
        key: '1',
        label: (
            <div  >
                1st menu item
            </div>

        ),
        icon: <SmileOutlined />,
    },
    {
        key: '2',
        label: (
            <div >
                2nd menu item
            </div>
        ),
        icon: <SmileOutlined />,
        disabled: false,
    },
    {
        key: '3',
        label: (
            <div  >
                3rd menu item
            </div>
        ),
        icon: <SmileOutlined />,
        disabled: false,
    },
    {
        key: '4',
        danger: true,
        label: 'a danger item',
    },
];
const DropdownCom = () => (
    <Dropdown
        menu={{
            items,
        }}
    >
        <div onClick={(e) => e.preventDefault()}>
            <Space>
                <CgProfile style={{fontSize: "20px"}} />
                <DownOutlined />
            </Space>
        </div>
    </Dropdown>
);
export default DropdownCom;