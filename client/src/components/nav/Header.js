import React, {useState} from 'react';
import {Menu} from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined, UserAddOutlined, UserOutlined, LogoutOutlined, } from '@ant-design/icons';
import {Link} from"react-router-dom";
import firebase from "firebase";
import {useDispatch} from "react-redux";
import{useHistory} from "react-router-dom";

const { SubMenu,Item } = Menu;
 
const Header = () => {
     const [state, setCurrent] = useState('home');
     let dispatch = useDispatch();
    let history = useHistory();

const handleClick = (e) => {
// console.log(e.key);
setCurrent(e.key);
}

const logout = () =>{
  firebase.auth().signOut()
  dispatch({
       type: "LOGOUT",
        payload: null,
  });
  history.push("/login");
};
return (
    <Menu onClick={handleClick} theme="dark"  mode="horizontal">
      <Item key="home" icon={<AppstoreOutlined />}>
       <Link to="/">Home</Link>
      </Item>

      <Item key="register" icon={<UserAddOutlined />} className="float-right">
      <Link to="/register">Register</Link>
      
      </Item>

      <Item key="login" icon={<UserOutlined />} className="float-right">
      <Link to="/login">Login</Link>
       
      </Item>

      
    
      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username">
       
          <Item key="setting:1">Option 1</Item>
          <Item key="setting:2">Option 2</Item>
          <Item icon={<LogoutOutlined/>} onClick={logout} >Logout</Item>
      
       
      </SubMenu>
     
    </Menu>
  );
}
export default Header ;