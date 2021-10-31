
import { useState } from 'react';
import { Button, Menu } from 'antd';
// import { Redirect, withRouter, Route, Switch } from "react-router-dom";
import discoverList from '@/config/discoverList';
import { MenuInfo } from 'rc-menu/lib/interface';
import './index.less'


//  发现音乐页面展示内容
const Discover = () => {
  const [selectKey, setSelectKey] = useState('0');

  // 顶部标签点击后回调
  const handleClick = (e: MenuInfo, value: { name?: string; path: any; }) => {
    setSelectKey(e.key);
  };
  return (
    <div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[selectKey]} className='navMenu'>
        {
          discoverList.map((value, index) => {
            return <Menu.Item className="navMenuItem" key={index} onClick={e => handleClick(e, value)}>
              {value.name}
            </Menu.Item>
          })
        }
      </Menu>
      {/* <Button>??41?</Button>
      <Button>??41?</Button> */}
    </div>


  );
};

export default Discover;
