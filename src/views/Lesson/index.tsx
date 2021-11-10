
import React from 'react';
import { Menu } from 'antd';
// import { Redirect, withRouter, Route, Switch } from "react-router-dom";
import { SiderData } from './bookTitle'

//  我的 页面展示内容
const Lesson = () => {
  const [openKeys, setOpenKeys] = React.useState([SiderData[0].name]);
  const rootSubmenuKeys = SiderData.map(item => { return item.name });

  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  // 渲染菜单
  const renderMenu = (sider: Array<any>) => {
    return sider.map(item => {
      //没有子元素
      if (!item.children || !item.children.length) {
        return (
          <Menu.Item key={item.name} onClick={(e)=>{console.log(e.keyPath)}}>
            <span >{item.name}</span>
          </Menu.Item>
        )
      } else {
        return (
          <Menu.SubMenu
            key={item.name}
            title={<span style={{display: "block",  textAlign:"center"}}>{item.name}</span>}
          >
            {renderMenu(item.children)}
          </Menu.SubMenu>
        )
      }
    })
  }

  return (
    <div style={{ width: "100%", height: "50px", display: "block", background: "#FF00FF" }}>
      <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: "100%" }}>
        {renderMenu(SiderData)}
      </Menu>

    </div>


  );
};

export default Lesson;
