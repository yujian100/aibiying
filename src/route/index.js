import Detail from '@/view/Detail'
import Home from '@/view/Home'
import More from '@/view/More'
import {Navigate} from 'react-router-dom'
import Dom from '@/view/Dom'

const routes = [

    {
        path:'/',
        element:<Navigate to='/home'></Navigate>
    },
    {
        path:'/home',
        element:<Home></Home>
    },
    {
        path:'/detail',
        element:<Detail></Detail>
    },
    {
        path:'/more',
        element:<More></More>
    },
    {
        path:'/dom',
        element:<Dom></Dom>
    }

]

export default routes