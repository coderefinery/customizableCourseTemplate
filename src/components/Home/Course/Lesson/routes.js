import Lesson from "./vLesson";
import { routes as childRoutes } from "./Episode"

export default [
  {
    path: 'lessons/:lessonId',
    component: Lesson,
    meta: {
      title: 'Lesson'
    },
    children: childRoutes
  }
]
