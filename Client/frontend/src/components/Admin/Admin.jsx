
import { useState } from "react";
import axios from "axios";
import styles from "./Admin.module.css";

export const Admin = ({ prev, next }) => {
    // const [text, setText] = useState("");
   

    return (
        <div className={styles.main}>
            <div className={styles.nav}>
                <button className={styles.back4}>Add Contest</button>
                <button className={styles.back4}>Add Student</button>
                <button className={styles.back4}> Access Students</button>
                <div className={styles.back4} style={{marginLeft:"500px", textAlign:"center"}}>Mail of Admin</div>
            </div>
           
        </div>
    );
};
