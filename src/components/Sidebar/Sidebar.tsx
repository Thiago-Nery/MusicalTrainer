// import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Menu, Drawer, Typography, Button } from 'antd';
import type { MenuProps } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import Logo from '../../assets/logo.png'
type MenuItem = Required<MenuProps>['items'][number];
import './Sidebar.css'

const { Title } = Typography;

interface SidebarProps {
  isDrawerOpen: boolean;
  handleDrawer: () => void;
}

export default function Sidebar({isDrawerOpen, handleDrawer}: SidebarProps){
    const navigate = useNavigate()

    const handleNavigate = (path: string) => {
      navigate(path)
      handleDrawer()
    }

    const items: MenuItem[] = [
      {
        label: "Home",
        key: "home",
        onClick: () => handleNavigate("/"),
      },
      {
        label: "Intervalos",
        key: "intervals",
        children: [
          {
            label: "Classificação",
            key: "intervals-classification",
            onClick: () => handleNavigate("/intervals/classification"),
          },
          {
            label: "Inversão",
            key: "intervals-inversion",
            onClick: () => handleNavigate("/intervals/inversion"),
          },
        ],
      },
      {
        label: "Escalas",
        key: "scales",
        onClick: () => handleNavigate("/scales"),
      },
      {
        label: "Formações",
        key: "formations",
        children: [
          {
            label: "Tríades",
            key: "formations-triads",
            onClick: () => handleNavigate("/formations/triads"),
          },
          {
            label: "Tétrades",
            key: "formations-tetrads",
            onClick: () => handleNavigate("/formations/tetrads"),
          },
        ],
      },
      {
        label: "Campo Harmônico",
        key: "harmonicField",
        onClick: () => handleNavigate("/harmonicField"),
      },
      {
        label: "Acordes Relativos",
        key: "relativeChords",
        onClick: () => handleNavigate("/relativeChords"),
      },
      {
        label: "Círculo de Quintas / Quartas",
        key: "circleOfFifthsFourths",
        onClick: () => handleNavigate("/circleOfFifthsFourths"),
      },
    ];
    
    return (
      <>
        <Drawer
          title={
            <div className="Title_Container">
              <div>
                <img src={Logo} height={38} />
                <Title level={2} className="DrawerTitle">
                  {" "}
                  Musical Trainer{" "}
                </Title>
              </div>
              <Button
                type="text"
                icon={<CloseOutlined />}
                size="large"
                onClick={handleDrawer}
              />
            </div>
          }
          onClose={handleDrawer}
          open={isDrawerOpen}
          placement="left"
          closable={false}
        >
          <Menu
            mode="inline"
            items={items}
            defaultSelectedKeys={["home"]}
          />
        </Drawer>
      </>
    );
}