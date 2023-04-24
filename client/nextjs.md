## Installation:
* Install nextjs in the current directory using command:
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
- <Link> is a React component that extends the HTML <a> element to provide prefetching and client-side navigation between routes. It is the primary way to navigate between routes in Next.js.
```js
  import Link from 'next/link';

  export default function Page() {
    return <Link href="/dashboard">Dashboard</Link>;
  }
```
- see Navbar.js component to understand better.

