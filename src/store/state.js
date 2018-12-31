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
    "title": "Course 1 Title",
    "lessons": [
      {
        "title": "Lesson 1 Title",
        "abstract": "Lesson abstract markdown",
        "description": "Lesson description markdown",
        "episodes": [
          {
            "title": "Episode 1 Title",
            "abstract": "Episode abstract markdown",
            "description": "Episode description markdown",
            "concepts": [
              {
                "title": "Concept 1-1 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-2 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-3 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              }
            ],
            "steps": [
              {
                "title": "Step 1 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 2 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 3 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              }
            ],
            "exercises": [
              {
                "title": "Exercise 1 Title",
                "description": "Exercise description markdown"
              },
              {
                "title": "Exercise 2 Title",
                "description": "Exercise description markdown"
              }
            ],
            "feedback": [
              {
                "author": "User Name",
                "content": "Feedback markdown"
              }
            ]
          },
          {
            "title": "Episode 2 Title",
            "abstract": "Episode abstract markdown",
            "description": "Episode description markdown",
            "concepts": [
              {
                "title": "Concept 1-1 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-2 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-3 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              }
            ],
            "steps": [
              {
                "title": "Step 1 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 2 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 3 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              }
            ],
            "exercises": [
              {
                "title": "Exercise 1 Title",
                "description": "Exercise description markdown"
              },
              {
                "title": "Exercise 2 Title",
                "description": "Exercise description markdown"
              }
            ],
            "feedback": [
              {
                "author": "User Name",
                "content": "Feedback markdown"
              }
            ]
          },
          {
            "title": "Episode 3 Title",
            "abstract": "Episode abstract markdown",
            "description": "Episode description markdown",
            "concepts": [
              {
                "title": "Concept 1-1 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-2 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-3 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              }
            ],
            "steps": [
              {
                "title": "Step 1 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 2 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 3 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              }
            ],
            "exercises": [
              {
                "title": "Exercise 1 Title",
                "description": "Exercise description markdown"
              },
              {
                "title": "Exercise 2 Title",
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
      },
      {
        "title": "Lesson 2 Title",
        "abstract": "Lesson abstract markdown",
        "description": "Lesson description markdown",
        "episodes": [
          {
            "title": "Episode 1 Title",
            "abstract": "Episode abstract markdown",
            "description": "Episode description markdown",
            "concepts": [
              {
                "title": "Concept 1-1 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-2 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-3 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              }
            ],
            "steps": [
              {
                "title": "Step 1 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 2 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 3 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              }
            ],
            "exercises": [
              {
                "title": "Exercise 1 Title",
                "description": "Exercise description markdown"
              },
              {
                "title": "Exercise 2 Title",
                "description": "Exercise description markdown"
              }
            ],
            "feedback": [
              {
                "author": "User Name",
                "content": "Feedback markdown"
              }
            ]
          },
          {
            "title": "Episode 2 Title",
            "abstract": "Episode abstract markdown",
            "description": "Episode description markdown",
            "concepts": [
              {
                "title": "Concept 1-1 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-2 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-3 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              }
            ],
            "steps": [
              {
                "title": "Step 1 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 2 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 3 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              }
            ],
            "exercises": [
              {
                "title": "Exercise 1 Title",
                "description": "Exercise description markdown"
              },
              {
                "title": "Exercise 2 Title",
                "description": "Exercise description markdown"
              }
            ],
            "feedback": [
              {
                "author": "User Name",
                "content": "Feedback markdown"
              }
            ]
          },
          {
            "title": "Episode 3 Title",
            "abstract": "Episode abstract markdown",
            "description": "Episode description markdown",
            "concepts": [
              {
                "title": "Concept 1-1 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-2 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-3 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              }
            ],
            "steps": [
              {
                "title": "Step 1 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 2 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 3 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              }
            ],
            "exercises": [
              {
                "title": "Exercise 1 Title",
                "description": "Exercise description markdown"
              },
              {
                "title": "Exercise 2 Title",
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
      },
      {
        "title": "Lesson 3 Title",
        "abstract": "Lesson abstract markdown",
        "description": "Lesson description markdown",
        "episodes": [
          {
            "title": "Episode 1 Title",
            "abstract": "Episode abstract markdown",
            "description": "Episode description markdown",
            "concepts": [
              {
                "title": "Concept 1-1 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-2 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-3 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              }
            ],
            "steps": [
              {
                "title": "Step 1 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 2 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 3 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              }
            ],
            "exercises": [
              {
                "title": "Exercise 1 Title",
                "description": "Exercise description markdown"
              },
              {
                "title": "Exercise 2 Title",
                "description": "Exercise description markdown"
              }
            ],
            "feedback": [
              {
                "author": "User Name",
                "content": "Feedback markdown"
              }
            ]
          },
          {
            "title": "Episode 2 Title",
            "abstract": "Episode abstract markdown",
            "description": "Episode description markdown",
            "concepts": [
              {
                "title": "Concept 1-1 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-2 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-3 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              }
            ],
            "steps": [
              {
                "title": "Step 1 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 2 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 3 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              }
            ],
            "exercises": [
              {
                "title": "Exercise 1 Title",
                "description": "Exercise description markdown"
              },
              {
                "title": "Exercise 2 Title",
                "description": "Exercise description markdown"
              }
            ],
            "feedback": [
              {
                "author": "User Name",
                "content": "Feedback markdown"
              }
            ]
          },
          {
            "title": "Episode 3 Title",
            "abstract": "Episode abstract markdown",
            "description": "Episode description markdown",
            "concepts": [
              {
                "title": "Concept 1-1 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-2 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-3 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              }
            ],
            "steps": [
              {
                "title": "Step 1 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 2 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 3 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              }
            ],
            "exercises": [
              {
                "title": "Exercise 1 Title",
                "description": "Exercise description markdown"
              },
              {
                "title": "Exercise 2 Title",
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
      },
      {
        "title": "Lesson 4 Title",
        "abstract": "Lesson abstract markdown",
        "description": "Lesson description markdown",
        "episodes": [
          {
            "title": "Episode 1 Title",
            "abstract": "Episode abstract markdown",
            "description": "Episode description markdown",
            "concepts": [
              {
                "title": "Concept 1-1 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-2 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-3 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              }
            ],
            "steps": [
              {
                "title": "Step 1 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 2 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 3 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              }
            ],
            "exercises": [
              {
                "title": "Exercise 1 Title",
                "description": "Exercise description markdown"
              },
              {
                "title": "Exercise 2 Title",
                "description": "Exercise description markdown"
              }
            ],
            "feedback": [
              {
                "author": "User Name",
                "content": "Feedback markdown"
              }
            ]
          },
          {
            "title": "Episode 2 Title",
            "abstract": "Episode abstract markdown",
            "description": "Episode description markdown",
            "concepts": [
              {
                "title": "Concept 1-1 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-2 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-3 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              }
            ],
            "steps": [
              {
                "title": "Step 1 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 2 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 3 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              }
            ],
            "exercises": [
              {
                "title": "Exercise 1 Title",
                "description": "Exercise description markdown"
              },
              {
                "title": "Exercise 2 Title",
                "description": "Exercise description markdown"
              }
            ],
            "feedback": [
              {
                "author": "User Name",
                "content": "Feedback markdown"
              }
            ]
          },
          {
            "title": "Episode 3 Title",
            "abstract": "Episode abstract markdown",
            "description": "Episode description markdown",
            "concepts": [
              {
                "title": "Concept 1-1 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-2 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              },
              {
                "title": "Concept 1-3 Title",
                "abstract": "Concept abstract markdown",
                "description": "Concept description markdown"
              }
            ],
            "steps": [
              {
                "title": "Step 1 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 2 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              },
              {
                "title": "Step 3 Title",
                "abstract": "Step *abstract* markdown",
                "description": "Step description markdown"
              }
            ],
            "exercises": [
              {
                "title": "Exercise 1 Title",
                "description": "Exercise description markdown"
              },
              {
                "title": "Exercise 2 Title",
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
  isAuthenticated: false,
  contentIsEditable: false
}


export default state
