# Angular7FirstProject
Open Source coding
node_modules/Packages

nodejs https://nodejs.org/en/
visualStudioCode: https://code.visualstudio.com/
Github: https://github.com/
Win: https://git-scm.com/downloads

json=> javascript object  notation
{
    name:"angular",
    class:"first"
},
{
    name:"node",
    class:"second"
}

package.json

--local
--global


npm init
// local install
npm install --save zone.js
// global install
npm install -g @angular/cli
> mac/linux
sudo npm install -g @angular/cli
> Win
rum cmdprompt as admin
>>>> npm install -g @angular/cli

npm install typing -D

Step1
> npm install -g @angular/cli
Step2
> ng new firstapp
Step 3
> cd firstapp
Step 4
> npm start
Step 5
> http://localhost:4200


https://www.codecademy.com/courses/introduction-to-javascript

bootstrap
files in angular folder
building firstpage of angularapp

/*====================
    bootstrap
=====================*/
table
alerts
button
glyphicons
panels
navbar
forms
input
modal


/*================*/
tslint.json | Default | NoChange => help me to format the code.
tsconfig.json | Default | NoChange => Basic Confugration of transpile
                                      help to convert .ts => .js
ReadME.md | Default | CanChange according to project => Information about
                                                        App and command to excute App
package.json | Default | Change Require => Have Informationof packages as well
                                        Script to run the appliaction
package-lock.json| Default | NoChange => Information of all packages
<6 angular.json
>=5 angular-cli.json| Default | Less Change Require => path for directory or app required path

.gitignore| Default | Less Change Require => path or file which we dont want to push
.editorconfig | Default | NoChange=>   make same standerd of wirting among team
node_modules=> all the Packages
e2e=> end to end 


/*===========*/
Modules | NgModule   => All the declaration will be done here
Components | Component=> Containes HTML,CSS and Logics
Pipe | Pipe,PipeTarnsform=> Run time transformation
Service | Injectable=> help to connect backend or any external file
Routing | NgModule=> Routing between pages


angular.json ==> main.ts => app.module => app.component
