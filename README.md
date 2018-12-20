# Customizable Course Template

> A flexible viewer for codeRefinery course contents
https://coderefinery.github.io/customizableCourseTemplate/

## Environment

`Node >= 6`

## Start

 - Clone or download this repository
 - Enter your local directory, and install dependencies:

``` bash
yarn
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
  "episodes": {
    "bashCommands": [
      {
        "title": "Episode Title",
        "introduction": "html",
        "steps": "html"
      },
    ],
    "bashAliases": [
      {
        "title": "Episode Title",
        "introduction": "html",
        "steps": "html"
      },
    ],
    "GUI": [
      {
        "title": "Episode Title",
        "introduction": "html",
        "steps": "html"
      }
    ]
  }
}
```
