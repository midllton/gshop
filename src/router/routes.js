import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'

export default [
    {
        path:'/',
        component:Home
    },
    {
        name:'search',
        path:'/search/:keyword?',
        component:Search
    },
    {
        path:'/register',
        component:Register,
        meta:{
            isHideFooter:true
        }
    },
    {
        path:'/login',
        component:Login,
        meta:{
            isHideFooter:true
        }
    }
]