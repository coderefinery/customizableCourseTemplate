import Home from './vHome'
import { routes as childRoutes } from "./Course";

export default [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Home'
    },
    children: childRoutes
  }
]
