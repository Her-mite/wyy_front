import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import headerList from "@/config/headerList";
import { MenuInfo } from 'rc-menu/lib/interface';
import logoImg from "@/assets/images/wyy_logo.png";
import './index.less'

const { Header } = Layout

interface IProps { }
const SubPage: React.FC<IProps> = ((): JSX.Element => {

    const [selectKey, setSelectKey] = useState('0');

    useEffect(() => {
        console.log("userFEf", selectKey);
    }, [selectKey]);

    // 顶部标签点击后回调
    const handleClick = (e: MenuInfo, value: { name?: string; path: any; }) => {
        console.log(e, value.path);
        setSelectKey(e.key);
        console.log("statek", selectKey);
        // history.push(`/wyy_index/${value.path}`)

    };

    return (
        <Layout>
            <Header className="header_list">
            <img style={{ height:'inherit', float:"left", padding:"5px", marginLeft:"50px"}} src={logoImg} alt="logo" />
                <Menu theme="dark" mode="horizontal"  defaultSelectedKeys={[selectKey]} className='menu'>
                    {
                        headerList.map((value, index) => {
                            return <Menu.Item className="MenuItem" key={index} onClick={e => handleClick(e, value)}>
                                {value.name}
                                {index == parseInt(selectKey) ? <sub className='cor' /> : null}
                            </Menu.Item>
                        })
                    }
                </Menu>
                <div className='redBlock'/>
            </Header>
        </Layout>
    )
})
export default SubPage