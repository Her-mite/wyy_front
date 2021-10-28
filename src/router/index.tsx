/*  router/index.tsx  */
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { routeTypes } from '@/interfaces/routes'
import routesMap from '@/router/routes'
const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                {
                    routesMap.map((item: routeTypes , index: number) => {
                        return <Route
                        key={index}
                        path={item.path}
                        render={props => (
                          <item.component {...props} routes={item.routes} />
                        )}
                      />
                        // <Route  key={index} render={(props) => {
                        //     const Component: any = item.component
                        //     return <Component {...props} route={item} />
                        // }}></Route>
                    })
                }
            </Switch>
        </Router>
    )
}
export default Routes