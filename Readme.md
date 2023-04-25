## URO phones Assignment

### Process to create this Project:
1. Create a folder with project name.
2. Now Within this folder, create two more folders name client for frontend and server for backend.
3. Now go to server folder and create a backend server.
4. Then go to client folder to create react/nextjs app.


### Process to setup backend using node.js and express:
1. Run command: "npm init" to initialize a new Node.js project
2. Install express using command npm i express.
3. Install dotenv using 'npm i dotenv' and import and create a port using command:
```js
    const dotenv = require('dotenv');
    dotenv.config();

    const port  = process.env.PORT || 4000;
```
4. Now use the express module to start server using:
```js
    const express = require("express");
    //Create a express app and start server:
    const app = express();

    app.listen(port, (req, res) => {
    console.log("Server listening at port "+ port);
    });
```
5. Now start the server using node filename(index.js or server.js)
This will start the server but after making changes you need to restart server again so we use nodemon package which restart the server automatically. 
6. To install nodemon use command: npm i nodemon.
7. Add nodemon to package.json as an NPM script script->
```script
    "scripts":{
        "start": "node index.js"
        "dev": "nodemon index.js"
    }
```
8. Now start server using command npm run dev.

9. To parse the incoming requests with JSON we are using express.json() which is a built-in middleware function in Express.
```js
    app.use(express.json());
```
10. Install cors using 'npm i cors' to consume apis for client.
```js
    const cors = require('cors');
    app.use(cors());
```

11. Setup database and import in index.js to connect DB:  <br>
    visit this link to how to setup DB: https://github.com/abhijeetnishal/ORU-phones-Assignment/blob/master/server/models/dbConnect.js
```js
    //require database connection 
    const dbConnect = require("./database/dbConnect");

    // execute database connection 
    dbConnect();  
```

13. Finally use endpoints.
```js
//get request when server is live
app.get('/',(req, res)=>{
    res.status(200).json('Server is Live');
  })

//import router to perform functionality on different endpoints
const userRouter = require('./routes/userRoutes');
app.use(userRouter);
```
14. This is the basic backend setup.

### Create an API endpoints:
1. create a folder name routes and create different routes file according to your need.
2. create a file called routes.js where all routes of tasks are present.
3. Refer the userRoutes.js file in routes folder to know how to create and use routes.
4. Endpoints of this applications are:
    1. /query-1 to perform task-1.
    2. /query-2 to perform task-2.
    3. /query-3 to perform task-3.
    4. /query-4 to perform task-4.
    5. /query-5 to perform task-5.
5. Visit this link where i explain the routes code: https://github.com/abhijeetnishal/ORU-phones-Assignment/blob/master/server/routes/userRoutes.js

### Create a functinality for API endpoints:
1. Create a folder name controller and create different controller files according to your need.
2. create a file called authController.js where all functionality for route is implemented.
3. It contains all functionality of tasks of endpoints defined in userRoutes.js file.
4. Visit this link where i explain the controllers code: https://github.com/abhijeetnishal/ORU-phones-Assignment/blob/master/server/controllers/userController.js

<br>
<br>

### Process to setup frontend using nextjs:

## Installation:
* Install nextjs 13.3.1 (latest version) in the current directory(client) using command:
```js 
    npx create-next-app@latest --experimental-app .   
```
* After that it will ask some question:    <br>
✔ Would you like to use TypeScript with this project? … No / Yes <br>
✔ Would you like to use ESLint with this project? … No / Yes  <br>
✔ Would you like to use `src/` directory with this project? … No / Yes   <br>
✔ What import alias would you like configured? … @/*   <br>
Select options according to your project.

## Start Application:
```js
npm run dev
```

## Basic Folder/File Structure:
* node_modules contains all installed packages.
* public folder contains images/icons.
* .gitignore file used to specify files and folder, not push to github like node_modules, .env, etc.
* package.json: specify the dependencies/packages installed with version.
* src folder is main folder where we work and create components, etc.
* Inside src folder, app directory is present:
* In the app directory:
    - Folders are used to define routes. A route is a single path of nested folders, following the hierarchy from the root folder down to a final leaf folder that includes a page.js file.
    - Files are used to create UI that is shown for the route segment.
    - To create a nested route, you can nest folders inside each other. For example, you can add a new /dashboard/settings route by nesting two new folders in the app directory.
    - The /dashboard/settings route is composed of three segments: <br>
        / (Root segment)  <br>
        dashboard (Segment)   <br>
        settings (Leaf segment)   <br>
* File convention:
    - page.js: Create the unique UI of a route and make the path publicly accessible.
    - route.js: Create server-side API endpoints for a route.
    - layout.js: Create shared UI for a segment and its children. A layout wraps a page or child segment.
    - loading.js: Create loading UI for a segment and its children. loading.js wraps a page or child segment in a React Suspense Boundary, showing the loading UI while they load.
    - not-found.js: Create UI to show when the notFound function is thrown within a route segment or when a URL is not matched by any route.

* To know more visit: https://beta.nextjs.org/docs/routing/fundamentals

<br>

### layout.js:
* We can create components and add in this file like header, footer, etc just like app.js in react.
* e.g.->
```js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* header */}
        <Header/>
        {/* navbar */}
        
        {children}
      </body>
    </html>
  )
}
```

<br>

### page.js:
- this is the default home page.

### File based routing:
- In react we have to use react-router-dom to create routes like about, home, etc.
- But in nextjs, we have to create folder inside app directory with route name like about, home, etc and within this folder create a file name page.js for every route folder.

### Components Folder:
* Create a folder in app directory named components.
* Now in components folder create components like Header.jsx,... just like react.
* Within Header create page as we do in react.
* After creating component import it to layout.js same as react as we do in app.js.

### Styles Folder:
* Create a styles folder in app directory same as react and create css file inside it with name header.module.css to specify style to that component only.
* Import css file same as react and use styling using className={styles.task1}.

### link/image component:
- Link is a React component that extends the HTML element to provide prefetching and client-side navigation between routes. It is the primary way to navigate between routes in Next.js.
```js
  import Link from 'next/link';

  export default function Page() {
    return <Link href="/dashboard">Dashboard</Link>;
  }
```
- see Navbar.js component to understand better.

### Main working files:
1. Header.js is a header component of this project.
2. Navbar.js is a navbar component of this project.
3. Tasks folder container the component of all 5 tasks.
4. Within the tasks folder page.js file is present where we create component.
5. Task component shows the data of task using table and getting data from server using fetch under useEffect.
6. For all task component uses api call to get data and display.