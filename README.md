## Installation
- clone into folder 
- cd to src dir 
- run npm install 

## Workflow
Work in src/components dir by creating new components and mounting them into MainFrame component

## Gulp tasks
- gulp browserify - compile src/app.jsx to app.js
- gulp browserify-prod - same as browserify just uglifies js
- gulp sass - compiles src/sass/* to css
- gulp watch - tracks components and sass folder changes and runs browserify and sass tasks
- gulp hot-edit - runs hot edit server on localhost:8080
 
## Hot Edit
- After starting hot-edit server you can watch live changes of react code in browser on http://localhost:8080.
- To see live changes of sass styles add "require('./your-sass-template.scss')" in the top of your component files.
- On hot edit server all localhost:8080/api/* links are forwarded to localhist:3000/api/*.
