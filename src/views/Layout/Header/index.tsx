import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { useHistory } from "react-router-dom";

import headerList from "@/config/headerList";
import { MenuInfo } from 'rc-menu/lib/interface';
import logoImg from "@/assets/images/wyy_logo.png";
import './index.less'

const { Header } = Layout

interface IProps { }
const SubPage: React.FC<IProps> = ((): JSX.Element => {

    const [selectKey, setSelectKey] = useState('0');
    const history = useHistory()

    // useEffect(() => {
    //     console.log("userFEf", selectKey);
    // }, [selectKey]);

    // 顶部标签点击后回调
    const handleClick = (e: MenuInfo, value: { name?: string; path: any; }) => {
        setSelectKey(e.key);
        history.push(`/${value.path}`)
    };

    return (
        <Layout>
            <Header className="header_list">
                <img style={{ height: 'inherit', float: "left", padding: "5px", marginLeft: "50px" }} src={logoImg} alt="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[selectKey]} className='menu'>
                    {
                        headerList.map((value, index) => {
                            return <Menu.Item className="MenuItem" key={index} onClick={e => handleClick(e, value)}>
                                {value.name}
                                {/* eslint-disable-next-line */}
                                {index == parseInt(selectKey) ? <sub className='cor' /> : null}
                            </Menu.Item>
                        })
                    }
                </Menu>
                <div className='redBlock' />
            </Header>
        </Layout>
    )
})
export default SubPage