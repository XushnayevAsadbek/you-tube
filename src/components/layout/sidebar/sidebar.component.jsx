import { HistoryOutlined, HomeOutlined, UploadOutlined, VideoCameraOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd"
import { useLocation, useNavigate } from "react-router-dom";
const {Sider} = Layout;
export const Sidebar = ({ collapsed }) =>{

  const navigate = useNavigate();
  const {pathname} = useLocation();
  const onNaviget = ({key}) =>{
    navigate(key);
  }
    return(
        <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          onClick={onNaviget}
          selectedKeys={[`/${pathname.split('/') [1]}`]}
          items={[
            {
              key: '/',
              icon: <HomeOutlined /> ,
              label: 'Главная',
            },
            {
              key: '/short',
              icon: <VideoCameraOutlined />,
              label: 'Shorts',
            },
            {
              key: '/podpiski',
              icon: <UploadOutlined/>,
              label: 'Подписки',
            },
            
            {
              key: '/biblotika',
              icon: <YoutubeOutlined />,
              label: 'biblotika',
            },
            {
              key: '/history',
              icon: <HistoryOutlined/>,
              label: 'history',
            }, {
              key: '/video',
              icon: <VideoCameraOutlined />,
              label: 'video',
            },
          ]}
        />
      </Sider>
    )
 }