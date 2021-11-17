
import { useState } from 'react';
import { Result, Select, Button } from 'antd';
import { useLocation, useHistory } from "react-router-dom";
const { Option } = Select;


// 文章内容
const Article = () => {
    const location: any = useLocation(); //获取跳转页面携带的值
    const history: any = useHistory();

    const [speed, setSpeed] = useState(1)

    let audioPath = location.search.split('=')[1] // 提供文件具体位置， 服务器上为/home/hujq/application/data
    // 未找到资源时返回提示
    if (!audioPath) return (<>
        <Result
            status="404"
            title="404"
            subTitle="抱歉， 未找到资源文件"
            extra={<Button type="primary" onClick={() => {
                console.log("antygg", history.go(-1));
            }}>Back Home</Button>}
        />
    </>)

    // 音频资源地址
    // const url = require('../../../audio/' + keyPath[2] + '/' + keyPath[1] + "/" + keyPath[0] + ".mp3").default // 本地资源
    // const url = `http://1.117.188.206/${keyPath[2]}/${keyPath[1]}/${keyPath[0]}.mp3` // 网络资源 state(页面刷新会丢失)
    const url = `http://1.117.188.206${audioPath}.mp3`  //在url中展示， 刷新不丢失


    const changeSpeed = (value: number) => {
        console.log("keee", value);
        setSpeed(value)
        let v: any = document.getElementById("myaudio");
        v.playbackRate = value;
    }

    return (
        <>
            <div style={{ display: 'flex', width: "100%", justifyContent: 'space-between', alignItems: 'center' }}>
                <audio id="myaudio" style={{ width: "80%" }} src={url} controls>
                    你的浏览器不支持音频播放哦！(;´༎ຶД༎ຶ`)
                </audio>
                <div style={{ flex: 1 }}>
                    <Select defaultValue={speed} onChange={changeSpeed} >
                        <Option value={0.75}>0.75~</Option>
                        <Option value={1}>1.00-</Option>
                        <Option value={1.25}>1.25!</Option>
                        <Option value={1.5}>1.50!</Option>
                    </Select>
                </div>

            </div>
            <div style={{ height: '85vh' }}>
                <iframe
                    src={`http://1.117.188.206/${audioPath}.html`}
                    style={{ width: '100%', height: '100%', border: "0" }}
                    id={'overviewIframe'}
                    className={'iframeStyle'}
                    title={'content'}
                    >
                </iframe>
            </div>
        </>


    );
};

export default Article;
