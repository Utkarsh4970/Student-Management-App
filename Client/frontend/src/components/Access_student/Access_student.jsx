
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Access_student.module.css";

export const Access = ({ prev, next }) => {

    const [s_data, setS_data] = useState([]);

    const student_data = () => {

        axios.get("http://localhost:2244/students")
            .then((res) => (
                // console.log(res.data.contests)
                // let data = res.data.contests
                setS_data(res.data.students)
            ))
            .catch((err) => (
                console.log(err.message)
            ))
    }
    useEffect(() => {
        student_data();
    }, [])

    console.log("s_data", s_data);

    const handleremove = (e) => {

      const new_data = s_data.filter((i) => (
            i._id != e
        ))
        setS_data(new_data)

        axios.delete(`http://localhost:2244/students/${e}`)
        .then((res) => (
            console.log("while removing",res)
        ))
        console.log(e)
    }

    return (
        <div className={styles.main}>
            <div className={styles.contest_p}>
                {
                    s_data.map((e) => (
                        <div className={styles.content} key={e._id}>
                            <div className={styles.first_div}>
                                <div className={styles.title}>{e.name}</div>
                                <div className={styles.tag}>{e.education}</div>
                            </div>
                            <div className={styles.sec_div}>
                                <div>{e.city}</div>
                                <div>{e.gender}</div>
                                <div>{e.contact}</div>
                                <button onClick={() => (handleremove(e._id))} className={styles.remove}>REMOVE</button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};
