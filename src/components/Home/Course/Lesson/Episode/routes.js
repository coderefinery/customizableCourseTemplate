import Episode from "./vEpisode";
import { routes as StepRoutes } from "./Step";
import { routes as ExerciseRoutes } from "./Exercise";
import { routes as QuizRoutes } from "./Quiz";

export default [
  {
    path: 'episodes/:episodeId',
    component: Episode,
    meta: {
      title: 'Episode' // todo: lookup episode title fx. this.$store.course[courseId].lessons[lessonId].episodes[episodeId].title
    },
    children: [
      ...StepRoutes,
      ...ExerciseRoutes,
      ...QuizRoutes
    ]
  }
]
