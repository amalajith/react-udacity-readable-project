
# Udacity Project Readable

Project files for Udacity redux accessment project.

## Installation instructions

As a prerequisite, you will need to have Nodejs and npm installed.
Clone the GiHub repository and use npm to install the dependencies.

`git@github.com:amalajith/react-udacity-readable-project.git`

Project files are divided into the two folders
   - `api-server`
   - `frontend`
 
This repository includes the code for the backend API Server that you'll use to develop and interact with the front-end portion of the project.

* Install and start the API server
    - `cd api-server`
    - `npm install`
    - `node server`
* In another terminal window, use Create React App to scaffold out the front-end
    - `create-react-app frontend`
    - `cd frontend`
    - `npm start`
    
# Frontend

All the project files are in `src` folder. 

The directory structure inside `src` folder is 

```
src/
    actions -> All the action constants and action creator are here.
    components -> Presentational components
    container -> Components aware of redux state
    reducers -> All the redux reducers
    utils -> Api paths and base urls
    App.css
    App.js - Has all the routes using react-router-dom
    App.test.js
    index.css
    index.js
    logo.svg
```

### Layouts
Have used React semantic UI for layouts and UI

## API Server

Information about the API server and how to use it can be found in its [README file](api-server/README.md).
