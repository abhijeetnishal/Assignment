//import express to use router method
const express = require('express');

//express.Router() is a method in the Express.js that creates a new router object.
//It is used to define routes for a specific endpoint.
const userRouter = express.Router();

//import methods from authController
const { query1Functionality, query2Functionality, query3Functionality, query4Functionality, query5Functionality } = require('../controllers/userController');

//endpoint for query-1
userRouter.get('/query-1', query1Functionality);

//endpoint for query-2
userRouter.get('/query-2', query2Functionality);

//endpoint for query-3
userRouter.get('/query-3', query3Functionality);

//endpoint for query-4
userRouter.get('/query-4', query4Functionality);

//endpoint for query-5
userRouter.get('/query-5', query5Functionality);

//export to router to use in other files (index.js file)
module.exports = userRouter;