import { useState } from "react";
import { Typography, Button } from "antd"
import { MenuOutlined } from '@ant-design/icons';
import Sidebar from "../Sidebar/Sidebar"
import "./Header.css"

const { Title } = Typography;

export default function Header(){
    const [isDrawerOpen, setIsDraweOpen] = useState(false)

    const handleDrawer = () => {
        setIsDraweOpen(!isDrawerOpen)
    }

    return (
        <div className="Header">
            <Button type="text" icon={<MenuOutlined />} onClick={handleDrawer} size="large"/>
            <Title level={2} className="Title">Musical Trainer</Title>

            <Sidebar isDrawerOpen={isDrawerOpen} handleDrawer={handleDrawer}/>
        </div>
    )
}