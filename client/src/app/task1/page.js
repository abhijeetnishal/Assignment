"use client";
import React, { useEffect, useState } from 'react'
import styles from '../styles/taskPage.module.css'

const task1 = () => {

  const [data, setData] = useState(null);
  const [dataLength, setDataLength] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
          // get the data from the api
          const response = await fetch('http://localhost:4000/query-1');
          // convert the data to json
          const data = await response.json();
          setData(data);
          setDataLength(data.length);
          console.log(data);
      }
      
      // call the function
      fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return data && (
    <>
      <div className={styles.taskPage}>
        <div className={styles.taskname}>
          1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
        </div>
        <table className={styles.table_container}>
          <tbody className={styles.main_tr}>
            <tr>
              <td className={styles.main_td}>ID</td>
              <td className={styles.main_td}>First Name</td>
              <td className={styles.main_td}>Last Name</td>
              <td className={styles.main_td}>Gender</td>
              <td className={styles.main_td}>Income</td>
              <td className={styles.main_td}>Car</td>
            </tr>
          </tbody>
          {
            dataLength && 
            (data.map((mainData, index) => (
                <tbody key={index} className={styles.main_tr}>
                  <tr>
                    <td className={styles.sub_td}>{mainData.id}</td>
                    <td className={styles.sub_td}>{mainData.first_name}</td>
                    <td className={styles.sub_td}>{mainData.last_name}</td>
                    <td className={styles.sub_td}>{mainData.gender}</td>
                    <td className={styles.sub_td}>{mainData.income}</td>
                    <td className={styles.sub_td}>{mainData.car}</td>
                  </tr>
                </tbody>
            )))
          }
        </table>
      </div>
    </>
  )
}

export default task1