import ColorService from './ColorFactory'

const appColorTone = 'blue-grey'
const appColors = ColorService(appColorTone, 'dc')

const state = {
  appColorTone: appColorTone,
  appColors: appColors,
  pageColor: {
    highlight: appColors.vDarkAccent().color,
    offset: '#777777',
    background: '#86939d'
  },
  course: {
    "title": "Course Title",
    "lessons": [
      {
        "title": "Lesson Title",
        "abstract": "Lesson abstract markdown",
        "description": "Lesson description markdown",
        "episodes": [
          {
            "title": "Episode Title",
            "abstract": "Episode abstract markdown",
            "description": "Episode description markdown",
            "concepts": [
              {
                "title": "Concept Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              }
            ],
            "steps": [
              {
                "title": "Step Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              }
            ],
            "exercises": [
              {
                "title": "Exercise Title",
                "description": "Exercise description markdown"
              }
            ],
            "feedback": [
              {
                "author": "User Name",
                "content": "Feedback markdown"
              }
            ]
          }
        ]
      }
    ]
  },
  user: null,
  isAuthenticated: false
}
export default state
