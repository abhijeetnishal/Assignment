import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'

function Navbar() {
    return (
        <>
            <div className={styles.header_container}>
                <Link className={styles.task1} href={'/task1'}>Task-1</Link> 
                <Link className={styles.task1} href={'/task2'}>Task-2</Link> 
                <Link className={styles.task1} href={'/task3'}>Task-3</Link> 
                <Link className={styles.task1} href={'/task4'}>Task-4</Link> 
                <Link className={styles.task1} href={'/task5'}>Task-5</Link> 
            </div>
        </>
    )
}

export default Navbar