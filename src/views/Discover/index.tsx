
import { useState } from 'react';
import { Menu, Carousel } from 'antd';
// import { Redirect, withRouter, Route, Switch } from "react-router-dom";
import discoverList from '@/config/discoverList';
import { MenuInfo } from 'rc-menu/lib/interface';

import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import SongContent from './SongContent';

import first_dance from "@/assets/images/carousel/第一支舞.jpeg";
import such_img from "@/assets/images/carousel/尽管如此.jpeg";
import maraso_img from "@/assets/images/carousel/马拉松.jpeg";
import star_img from "@/assets/images/carousel/坠落星辰.jpeg";



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
      {/* 子菜单 */}
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[selectKey]} className='navMenu'>
        {
          discoverList.map((value, index) => {
            return <Menu.Item className="navMenuItem" key={index} onClick={e => handleClick(e, value)}>
              {value.name}
            </Menu.Item>
          })
        }
      </Menu>

      {/* 轮播图 */}
      <div className="carousel-mode" style={{ display: "flex", justifyContent: "center", }}>
        <Carousel autoplay arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />} style={{ width: "800px" }}>
          <img src={first_dance} alt="first_dance" />
          <img src={such_img} alt="such_img" />
          <img src={maraso_img} alt="maraso_img" />
          <img src={star_img} alt="star_img" />
        </Carousel>
      </div>
      <SongContent />


    </div>


  );
};



export default Discover;
