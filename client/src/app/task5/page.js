"use client";
import React, { useEffect, useState } from 'react'
import styles from '../styles/taskPage.module.css'

const task5 = () => {

  const [data, setData] = useState(null);
  const [dataLength, setDataLength] = useState(0);

  useEffect(() => {
      const fetchData = async () => {
          // get the data from the api
          const response = await fetch('https://oruphoneserver.vercel.app/query-5');
          // convert the data to json
          const data = await response.json();
          setData(data);
          setDataLength(data.length);
          //console.log(data);
      }
      
      // call the function
      fetchData()
      // make sure to catch any error
      .catch(console.error);
      //eslint-disable-next-line
  }, []);

  return data && (
    <>
      <div className={styles.taskPage}>
        <div className={styles.taskname}>
          5. Show the data of top 10 cities which have the highest number of users and their average income.
        </div>
        <table className={styles.table_container}>
          <tbody className={styles.main_tr}>
            <tr>
              <td className={styles.main_td}>City</td>
              <td className={styles.main_td}>User Count</td>
              <td className={styles.main_td}>Average  Income</td>
            </tr>
          </tbody>
          {
            dataLength && 
            (data.map((mainData, index) => (
                <tbody key={index} className={styles.main_tr}>
                  <tr>
                    <td className={styles.sub_td}>{mainData._id}</td>
                    <td className={styles.sub_td}>{mainData.userCount}</td>
                    <td className={styles.sub_td}>{mainData.avgIncome}</td>
                  </tr>
                </tbody>
            )))
          }
        </table>
      </div>
    </>
  )
}

export default task5