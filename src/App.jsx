import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Routing/Layout'
import About from './Routing/About'
import Home from './Routing/Home'
import NotFound from './Routing/NotFound'
import Parent from './Memoization/Callback'
import MemoFun from './Memoization/MemoFun'
import EnhancedComponent from './HOC/EnhancedComponent'
import CounterApp from './Counter-Redux/Counter'
import FormInput from './Formik_ReactQuery/FormInput'

const router = createBrowserRouter([
  {
    path :"/",
    element:<Layout/>,
    children:[{
      path:'/',
      element:<Home/>
    },{
      path:'/callback',
      element:<Parent/>
    },
    {
      path:'/memo',
      element:<MemoFun/>
    },{
      path:'/about',
      element:<About/>
    },{
      path:'/query-formik',
      element:<FormInput/>
    },{
      path:'/HOC',
      element:<EnhancedComponent/>
    },{
      path:'/counter',
      element:<CounterApp/>
    },{
      path:'*',element:<NotFound/>
    }
  ]
  }
])
function App() {
  return <RouterProvider router={router}/>
}

export default App
