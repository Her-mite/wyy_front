
// import React, { useState } from 'react';
import { Result } from 'antd';
import { useLocation } from "react-router-dom";


// 文章内容
const Article = () => {
    const location: any = useLocation(); //获取跳转页面携带的值
    if (!location.state) return (<>
        <Result
            status="404"
            title="404"
            subTitle="抱歉， 未找到资源文件"
            // extra={<Button type="primary">Back Home</Button>}
        />
    </>)

    let keyPath = location.state.keyPath

    const url = require('../../../audio/' + keyPath[2] + '/' + keyPath[1] + "/" + keyPath[0] + ".mp3").default

    return (
        <>
            <div>
                <audio style={{ width: "80%" }} src={url} controls>
                    你的浏览器不支持音频播放哦！(;´༎ຶД༎ຶ`)
                </audio>
            </div>

        </>

    );
};

export default Article;
