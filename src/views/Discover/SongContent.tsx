import { Card, Divider } from 'antd';

import hot_logo from "@/assets/images/icons/hot_logo.png";

import { songsData } from './data/songsData';

const SongContent = () => {
    const contentTitle = ['华语', '流行', '摇滚', '民谣', '电子']

    return (
        <div style={styles.content}>
            {/* 标题索引 */}
            <div style={styles.hot}>
                <img src={hot_logo} style={styles.hot_logo} alt="hot_logo" />
                <a style={styles.a_title} href={"/hot"}>热门推荐</a>
                {
                    contentTitle.map((value, index) => {
                        console.log("indexm vlaue", index, value);
                        return (
                            <div>
                                <a style={styles.a_item} href={"/hotItem"}>{value}</a>
                                <Divider type="vertical" />
                            </div>
                        )

                    })
                }
            </div>
            {/* 图片内容展示 */}
            <div style={{ width: "800px", margin: "auto", display: "flex" }}>
                {

                    songsData.map(value => {
                        let imgSrc = require('@/' + value.imgUrl + '.png').default
                        return (
                            <Card
                                style={{ width: "180px" }}
                                hoverable

                            >
                                <img
                                    alt={value.name}
                                    src={imgSrc}
                                />

                            </Card>
                        )
                    })

                }
            </div>
        </div >
    )
}

const styles = {
    content: {
        display: "block",
        testAlign: "center",
        backgroundColor: "#F5F5F5",
    },
    hot: {
        backgroundColor: "#FFFFFF",
        width: "800px",
        height: "50px",
        lineHeight: "50px",
        verticalAlign: "middle",
        display: "flex",
        itemAlign: "center",
        margin: "auto"
    },
    hot_logo: {
        width: "30px",
        height: "30px",
        marginLeft: "12px",
        marginTop: "12px",
    },
    a_title: {
        color: "#333333",
        fontSize: "20px",
        fontFamily: "Microsoft Yahei",
        height: "30px",
        paddingRight: "30px",
    },
    a_item: {
        color: "#333333",
        fontSize: "12px",
        fontFamily: "Microsoft Yahei",
        height: "30px",
        paddingRight: "10px",
        lineHgiht: "50px"
    }
}
export default SongContent