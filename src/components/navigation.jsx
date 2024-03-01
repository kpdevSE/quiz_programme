import {Drawer} from 'antd';
import React, {useState} from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import DropdownCom from './dropdownCo';
const Navigation = () =>
{
    const [open, setOpen] = useState(false);
    const showDrawer = () =>
    {
        setOpen(true);
    };
    const onClose = () =>
    {
        setOpen(false);
    };
    return (
        <>
            <div style={{width: "85%", height: "40px", margin: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "#ffff", borderRadius: "10px", marginTop: "10px"}}>
                <div type="primary" onClick={showDrawer} style={{width: "100px", height: "20px", paddingLeft: '10px'}}>
                    <GiHamburgerMenu style={
                        {
                            fontSize: "20px"
                        }
                    } />
                </div>
                <div style={
                    {
                        paddingRight: "10px"
                    }
                }>
                    <DropdownCom />
                </div>
            </div>
            <Drawer onClose={onClose} open={open} placement="left">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};
export default Navigation;