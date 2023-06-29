import React, { useState } from 'react';
import './index.scss'
import {
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Col, Menu, Row } from 'antd';
import { NavLink } from 'react-router-dom';
import Films from '../manageFilm';
import Users from '../manageUsers';
import Dasboard from '../dasboard';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Dasboard', '1', <NavLink to="/admin/dasboard" rel="noopener noreferrer">,
        <PieChartOutlined />
    </NavLink>,
    ),
    getItem('ManageUsers', '2', <NavLink to="/admin/users" rel="noopener noreferrer">,
        <PieChartOutlined />
    </NavLink>,
    ),
    getItem('ManageFilms', '3', <NavLink to="/admin/films" rel="noopener noreferrer">,
        <PieChartOutlined />
    </NavLink>,
    ),
    getItem('ManageOrder', 'sub1', <MailOutlined />, [
        getItem('History order', '4', <NavLink to="/admin/order" rel="noopener noreferrer">,
            <PieChartOutlined />
        </NavLink>,
        ),
    ]),

    getItem('Home', '5', <NavLink to="/" rel="noopener noreferrer">,
        <PieChartOutlined />
    </NavLink>,
    ),
];

const HomeAdmin: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Row gutter={[20, 20]} style={{ display: 'flex' }}>
            <Col xxl={4}>
                <div style={{ width: 300 }}>
                    <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </Button>
                    <Menu
                        defaultOpenKeys={['1']}
                        mode="inline"
                        theme="light"
                        inlineCollapsed={collapsed}
                        items={items}
                        activeKey='1'
                        // selectedKeys={[window.location.pathname]}
                    />
                </div>
            </Col>
            {window.location.pathname === '/admin/users' &&
            <Col xxl={18} style={{padding:'100px 100px'}}> 
                <Users />
            </Col>}
            {window.location.pathname === '/admin/films' &&
            <Col xxl={20} style={{paddingTop:'100px',paddingLeft:100,paddingRight:100}}> 
                <Films />
            </Col>}
            {window.location.pathname === '/admin/dasboard' &&
            <Col xxl={20} style={{paddingTop:'100px',paddingLeft:100,paddingRight:100}}> 
                <Dasboard />
            </Col>}

            

        </Row>
    );
};

export default HomeAdmin;