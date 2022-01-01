
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Admin.module.css";

export const Admin = ({ prev, next }) => {

    const [c_data, setC_data] = useState([]);

    const getcontest_data = () => {

        axios.get("http://localhost:2244/contests")
            .then((res) => (
                // console.log(res.data.contests)
                // let data = res.data.contests
                setC_data(res.data.contests)
            ))
            .catch((err) => (
                console.log(err.message)
            ))
    }
    useEffect(() => {
        getcontest_data();
    }, [])

    console.log("c_dat", c_data)


    const handleremove = (e) => {

        const new_data = c_data.filter((i) => (
              i._id != e
          ))
          setC_data(new_data)
  
          axios.delete(`http://localhost:2244/contests/${e}`)
          .then((res) => (
              console.log("while removing",res)
          ))
          console.log(e)
      }

    return (
        <div className={styles.main}>
            <div className={styles.nav}>
                <button className={styles.back4}>Add Contest</button>
                <button className={styles.back4}>Add Student</button>
                <button className={styles.back4}> Access Students</button>
                <div className={styles.back4} style={{ marginLeft: "500px", textAlign: "center" }}>Mail of Admin</div>
            </div>
            <div className={styles.contest_p}>
                {
                    c_data.map((e) => (
                        <div className={styles.content} key={e._id}>
                            <div className={styles.first_div}>
                                <div className={styles.title}>{e.title}</div>
                                <div className={styles.tag}>{e.tag}</div>
                            </div>
                            <div className={styles.sec_div}>
                                <div>{e.c_type}</div>
                                <div>{e.date}</div>
                                <div>{e.time}</div>
                                <button onClick={() => (handleremove(e._id))} className={styles.remove}>REMOVE</button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};
