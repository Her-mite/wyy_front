/*  router/routes.ts  */
// 定义页面路由
// import LoginIndex from '@/views/Login'
import HomeIndex from '@/views/Home'
// import Discover from '@/views/Discover'
// import SubPages11 from '@/views/SubPages1/Page1'
// import SubPages12 from '@/views/SubPages1/Page2'
// import SubPages21 from '@/views/SubPages2/Page1'
// import SubPages22 from '@/views/SubPages2/Page2'
// import SubPages31 from '@/views/SubPages3/Page1'
// import SubPages32 from '@/views/SubPages3/Page2'
// import NotFound from '@/views/NotFound'
// import { AndroidOutlined, AppleOutlined, DingdingOutlined, IeOutlined, ChromeOutlined, GithubOutlined, AlipayCircleOutlined, ZhihuOutlined } from '@ant-design/icons'
import { routeTypes } from '@/interfaces/routes'
const routes: routeTypes[] = [
    {
        path: '/',
        // exact: true,
        component: HomeIndex,
        requiresAuth: false,
    },


]
export default routes