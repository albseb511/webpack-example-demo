# Instrcutions

- initialise project
- ensure that you goto the particular folder
```
npm init -y
git init
touch .gitignore
```
- add `node_modules` to .gitignore
- install package dayjs
```
npm install dayjs
```
- install webpack packages
```
npm install webpack webpack-cli --save-dev
```
- create folders, build, src
- create index.html inside build
- create index.js inside src
- create a component/function that will show the current time in a particular format from dayjs library
- append it to the body
- create index.html and basic tags for it to work
- import a file called `app.bundle.js` from the same folder as index.html
- create webpack.config.js
- add entry, and output fields
- entry should be the ./src/index.js
- output is where the bundled file should be
```bash
webpack
# if there is an error
# please ignore this, and move to the npm run script method
```
- add a script to the package.json
- "build" : "webpack"
- run 
```
npm run build
```
- you will get the bundled file, in the folder with the file name that you have suggested inside webpack.config.js