import Detail from '@/view/Detail'
import Home from '@/view/Home'
import More from '@/view/More'
import {Navigate} from 'react-router-dom'

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
    }

]

export default routes