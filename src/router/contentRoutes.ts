// 定义content路由
import Discover from '@/views/Discover'
import NotFound from '@/views/NotFound'

import { routeTypes } from '@/interfaces/routes'
const contentRoutes: routeTypes[] = [
    {
        path: '/pages',
        exact: true,
        component: Discover,
        requiresAuth: true,
        
    },
    {
        path: '*',
        exact: true,
        component: NotFound,
        requiresAuth: false,
    }

]
export default contentRoutes