# Customizable Course Template (under development)

A flexible viewer for codeRefinery course contents
https://coderefinery.github.io/customizableCourseTemplate/
The aim of this repository is to provide a flexible template the for code refinery courses with various abstractions represented by five viewing modes each addressing different learning modalities:

 - Code Refinery Course
 - Classroom Course
 - Self-learning Walkthrough
 - Reference Gist
 - Cheat Sheet

The layouts follow a successive abstraction from the course material. This course template implements the following structure:

- workshop
  - location
  - time
  - instructors
  - helpers
  - price
  - registration
  - contact
  - formatDescription
  - schedule
    - day
      - timeframe
        - course

- course
  - title
  - description
  - delimitation
  - prerequisites
    - installInstructions
  - disclaimer
  - goals
  - targetAudience
  - abstract
  - description
  - lessons
    - title
    - abstract
    - description
    - episodes
  
- episode
  - courseParent
  - title
  - overview
    - teachingDuration
    - exerciseDuration
  - description
  - objectives
  
- objective
  - title
  - abstract
  - concepts
    - title
    - abstract
    - description
  - steps
    - abstract
    - description
    - (feedback)
  - exercise
    - title
    - description
  - (feedback)


Hereby a *course* represents the topic participants are motivated to learn. It should be the title on the workshop programme or similar. *Lessons* bundle thematically related *episodes* into useful practices. *Episodes* are chunks of novel material introducing a maximum of five new *concepts*. *Steps* represent a single action (for example a single line console command, a click in a GUI, ...). *Exercises* should retrace the content of the containing *episode* assuming preceding *episodes* have been understood.

Each layout allows to navigate abstraction levels per structural component. Layouts are optimized for different organizational and cognitive constraints. The different layouts represent the structural components in distinct ways to optimize for various parsing techniques and practicalities concerning progressive manipulation of the learning material.   

From the milestone:"branchable course template" and onward attributes named "abstract" and "description" will hold markdown code for maximum flexibility. The viewing modes are detailed in the following.

### Coderefinery Course
With helpers around to resolve emerging issues, this layout renders most information visible. Course instructors can setup the course to show either "abstract" or "description" on course, lesssons, episodes, concepts, and steps individually. Feedback inputs are shown

### Classroom Teaching (single teacher)
Layout with abstract information visible. Progress- and navigation elements are epmhasized to account for participants getting lost in the course content. All entities are represented by default by their more verbose description attributes. Feedback elements are hidden.

### Walkthrough (Self-Learning)
While progress and navigation is accessible, the layout focus lies on minimalistic representation of each episode. All entities are represented by default by their more verbose description attributes. 

### Gist (Quick Refresher)
A quick overview of what the course covers and which episodes each lesson contains. Navigation in this layout is optimized for *quick vertical dives into specific episodes and steps*.

### Cheat Sheet
A minimal reference page listing the most basic information on steps and their effects with condensed styling. 

## Future Prospects
Later this template should allow users to select suites of exercises that reflect familiar working environments. By that time courses like the code refinery git courses should be offered in different abstractions. Thus users can choose to learn using git with "git commands", "bash aliases", or "graphical user interface". These courses should then link to each other fx. in their abstracts and descriptions.

## *Content Below is for Developers*

Prerequisites:

`Node >= 6`

## Start

 - Clone or download this repository
 - Enter your local directory, and install dependencies:

``` bash
npm install
```

## Develop

``` bash
# serve with hot reload at localhost:8010
npm run dev
```

## Build

``` bash
# build for production with minification
npm run build
```

## Generate Course Page
Supply course contents in data/contents.json (work in progress)

``` json
{
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
              "abstract": "Step abstract markdown",
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
}
```
