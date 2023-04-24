"use client";
import React, { useEffect } from 'react'
import styles from './page.module.css'

const page = () => {

  useEffect(() => {
    const fetchData = async () => {
          // get the data from the api
          const response = await fetch('https://oruphoneserver.vercel.app/');
          const data = await response.json();
          console.log(data);
      }
      
      // call the function
      fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <>
      <div className={styles.landing_page}>
        Click on above task button to show the output
      </div>
    </>
  )
}

export default page
