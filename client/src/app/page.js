"use client";
import React, { useEffect } from 'react'

const page = () => {

  useEffect(() => {
    const fetchData = async () => {
          // get the data from the api
          const response = await fetch('http://localhost:4000/');
          const data = await response.json();
          console.log(data);
      }
      
      // call the function
      fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <div style={{width:'100%',height:'calc(100vh - 130px)',fontSize:'30px' , display:'flex',justifyContent:'center', alignItems:'center'}}>
      Click on above task button to show the output
    </div>
  )
}

export default page
