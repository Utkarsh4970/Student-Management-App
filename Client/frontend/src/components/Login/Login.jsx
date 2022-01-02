
import { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import { Redirect } from "react-router-dom";

export const Login = ({ prev, next }) => {

    return (
        <div>
            <h1>Welcome to login page</h1>
        <div className={styles.parent}>
        <div className={styles.main}>
           <div className={styles.card1}>
               <h2> Admin Login</h2>
                <div>
                   <h3>Email:</h3> <input type={"email"} />
                </div>
                <div>
                   <h3> Password:</h3> <input type={"password"} />
                </div>
                <div>
                    <button className={styles.back4}>Login</button>
                </div>
           </div>
           <div className={styles.card2}>
           <h2> Student Login</h2>
                <div>
                   <h3>Email: </h3>  <input type={"email"} />
                </div>
                <div>
                    <h3>Password:</h3> <input type={"password"} />
                </div>
                <div>
                    <button className={styles.back4}>Login</button>
                </div>
           </div>
        </div>
        </div>
        </div>
    );
};
