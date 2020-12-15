import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
const { SubMenu } = Menu;
import style from './AppHeader.css';

export default function AppHeader(props) {
    
    return (
        <Menu  mode="horizontal" style={{textAlign:'center',direction:'rtl'}}>
           <Menu.Item key="home">
       <span className='font'>صفحه اصلی</span>
        </Menu.Item>
        <Menu.Item key="totorial">
        <span className='font'>دوره های آموزشی </span>
        
        </Menu.Item>
        <Menu.Item key="all_totorial">
        <span className='font'>همه دوره ها </span>
          
        </Menu.Item>
        <SubMenu key="SubMenu" title="فایل های آموزشی" className='font'>
          
            <SubMenu key="sub2"  title="برنامه نویسی" className='dir'>
                {/* <Menu.Item key="5" className='dir'>
                    <a href='http://www.google.com' >PHP</a></Menu.Item>
                <Menu.Item key="6">C++</Menu.Item> */}
      
            </SubMenu>
            <Menu.Item key="setting:2" className='dir'> مهارت های اساسی کامپیوتر</Menu.Item>
            <Menu.Item key="setting:3" className='dir'> انیمیشن سازی</Menu.Item>

           
         </SubMenu>
        <Menu.Item key="alipay">
          <a  target="_blank" rel="noopener noreferrer">
             <span className='font'>دوره های برنامه نویسی </span>
            
          </a>
        </Menu.Item>
      </Menu>
        

    )
}

