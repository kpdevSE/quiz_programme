import {DownOutlined, SmileOutlined} from '@ant-design/icons';
import {Dropdown, Space} from 'antd';
import React from 'react';
import {CgProfile} from "react-icons/cg";
const items = [
    {
        key: '1',
        label: (
            <p  >
                My Profile
            </p>

        ),
        icon: <SmileOutlined />,
    },
    {
        key: '2',
        label: (
            <p >
                Settings
            </p>
        ),
        icon: <SmileOutlined />,
        disabled: false,
    },
    {
        key: '3',
        danger: true,
        label: 'Log Out',
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