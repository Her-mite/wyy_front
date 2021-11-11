// 定义content路由
import Discover from '@/views/Discover'
import NotFound from '@/views/NotFound'
import Lesson from '@/views/Lesson'
import Article from '@/views/Lesson/Article'


import { routeTypes } from '@/interfaces/routes'
const contentRoutes: routeTypes[] = [
    {
        path: '/discover',
        exact: true,
        component: Discover,
        requiresAuth: true,   
    },
    {
        path: '/lesson',
        exact: true,
        component: Lesson,
        requiresAuth: true,   
    },
    {
        path: '/article',
        exact: true,
        component: Article,
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