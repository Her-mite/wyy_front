import React, { useRef } from 'react'
import { usePersistFn } from 'ahooks'
import { Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom'
import { Layout } from 'antd';
// import { hasPermission } from '@/utils/hasPermission'
import { routeTypes } from '@/interfaces/routes'
import Header from '@/views/Layout/Header'
import routes from '@/router/contentRoutes';
const { Content } = Layout;
const Home: React.FC<any> = ((props: RouteComponentProps): JSX.Element => {
    return <div className="wrapper">
        <Layout className="layout">
            <Header />
            <Content className="wrapper_box">
                <div className="wrapper_content">
                    <Switch>
                        {routes.map((route: routeTypes, index: number) => {
                            return(
                                <Route 
                                    key={index} 
                                    path={route.path} 
                                    component={route.component}
                                    />)
                                    })
                                }
                    </Switch>
                </div>
            </Content>
        </Layout>
    </div>
})
export default withRouter(Home)