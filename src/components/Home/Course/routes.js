import Course from "./vCourse";
import { routes as childRoutes } from "./Lesson"

export default [
  {
    path: 'courses/:courseId',
    component: Course,
    meta: {
      title: 'Course' // todo: lookup episode title
    },
    children: childRoutes
  }
]
