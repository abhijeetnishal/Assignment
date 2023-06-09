//import userSchema from models to perform query on this schema
const userSchema = require('../models/userModel');

//task-1 functionality
const query1Functionality = async (req, res)=>{
    //error handling using try-catch
    try{
        //query for task-1
        const query1 = await userSchema.find({
            $and:[
                { income: { $lt: "$5" } },
                { $or: [
                        { car: 'BMW' },
                        { car: 'Mercedes-Benz' }
                    ]
                }
            ]
        });
        res.status(200).json(query1);
    }
    catch(error){
        res.status(500).json(`internal server error: ${error}`);
    }
}

//task-2 functionality
const query2Functionality = async (req, res)=>{
    //error handling using try-catch
    try{
        //query for task-2
        const query2 = await userSchema.find({
            $and: [
              { gender: 'Male' },
              //This code is a MongoDB query that uses the $expr operator to compare the value of the phone_price field with the number 10000
              { $expr: { $gt: [{$toDouble: "$phone_price"}, 10000] } }
            ]
          });
        res.status(200).json(query2);
    }
    catch(error){
        res.status(500).json(`internal server error: ${error}`);
    }
}

//task-3 functionality
const query3Functionality = async (req, res)=>{
    //error handling using try-catch
    try{
        //query for task-3
        const query3 = await userSchema.find({
            // $and operator to combine three conditions: last_name starts with "M", quote character length is greater than 15, and email includes the user's last name.
            $and: [
                { last_name: /^M/ }, // matches last name starting with "M"
                { $expr: { $gt: [ { $strLenCP: "$quote" }, 15 ] } }, // matches quote character length greater than 15
                { email: { $regex: /M$/i } } // matches email including last name
              ]
        });
        res.status(200).json(query3);
    }
    catch(error){
        res.status(500).json(`internal server error: ${error}`);
    }
}

//task-4 functionality
const query4Functionality = async (req, res)=>{
    //error handling using try-catch
    try{
        //query for task-4
        const query4 = await userSchema.find({
            $and: [
                {
                    $or: [
                        {car: 'BMW'},
                        {car: 'Mercedes-Benz'},
                        {car: 'Audi'}
                    ]
                },
                //regex operator to find all users whose email does not include any digit
                { email: { $not: /\d/ } }
            ]
        });
        res.status(200).json(query4);
    }
    catch(error){
        res.status(500).json(`internal server error: ${error}`);
    }
}

//task-5 functionality
const query5Functionality = async (req, res)=>{
    //error handling using try-catch
    try{
        //query for task-5
        const query5 = await userSchema.aggregate([
            // match only documents where income starts with "$"
            { $match: { income: /^[$]/ } },
            
            // group by city and calculate total number of users and average income
            { $group: {
                _id: '$city',
                userCount: { $sum: 1 },
                avgIncome: { $avg: { $toDouble: { $substr: [ "$income", 1, -1 ] } } }
            }},
            
            // sort by userCount in descending order
            { $sort: { userCount: -1 } },
            
            // limit to top 10 cities
            { $limit: 10 }
        ])
        res.status(200).json(query5);
    }
    catch(error){
        res.status(500).json(`internal server error: ${error}`);
    }
}

//export functionality to use in userRoutes.js file
module.exports = {
    query1Functionality,
    query2Functionality,
    query3Functionality,
    query4Functionality,
    query5Functionality
}