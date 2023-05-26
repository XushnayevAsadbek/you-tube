import {
  AudioOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlayCircleOutlined,
  SearchOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout as AntLayout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Sidebar } from './sidebar';
import './layout.css'
const { Header, Sider, Content } = AntLayout;

export const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <AntLayout style={{
      height: '100%',
    }}>
      <Sidebar collapsed={collapsed} />
      <AntLayout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: 'flex',
            gap: '270px',

          }}
        >
          <div>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </div>
          <div>
            <input type="search"
            icon={<SearchOutlined />}
             placeholder='Введите запрос' style={{
              width: '400px',
              padding: '10px 15px',
              borderRadius: '20px'

            }}
              
            />
           
              {<AudioOutlined className='auido-icon' />}
          </div>
          <div style={{
            fontSize: '24px',
          }}>
            <div>

              {<VideoCameraOutlined className='video-icon' />}

              {<PlayCircleOutlined className='play-icon' />}
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            overflow: 'auto'
          }}
        >
          {children}
        </Content>
      </AntLayout>
    </AntLayout>
  )
}