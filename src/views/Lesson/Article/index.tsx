
// import React, { useState } from 'react';
import { Result } from 'antd';
import { useLocation } from "react-router-dom";


// 文章内容
const Article = () => {
    const location: any = useLocation(); //获取跳转页面携带的值
    let audioPath= location.search.split('=')[1]
    
    if (!audioPath) return (<>
        <Result
            status="404"
            title="404"
            subTitle="抱歉， 未找到资源文件"
            // extra={<Button type="primary">Back Home</Button>}
        />
    </>)
    

    // const url = require('../../../audio/' + keyPath[2] + '/' + keyPath[1] + "/" + keyPath[0] + ".mp3").default // 本地资源
    // const url = `http://1.117.188.206/${keyPath[2]}/${keyPath[1]}/${keyPath[0]}.mp3` // 网络资源 state(页面刷新会丢失)
    const url = `http://1.117.188.206${audioPath}.mp3`  //在url中展示， 刷新不丢失
    return (
        <>
            <div>
                <audio style={{ width: "100%" }} src={url} controls>
                    你的浏览器不支持音频播放哦！(;´༎ຶД༎ຶ`)
                </audio>
            </div>

        </>

    );
};

export default Article;
