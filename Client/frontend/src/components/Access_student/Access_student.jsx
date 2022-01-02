
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Access_student.module.css";

export const Access = ({ prev, next }) => {

    const [s_data, setS_data] = useState([]);
    // const [sortType, setSortType] = useState('albums');
    // useEffect(() => {
    //     // student_data()
    //   const sortArray = type => {
    //     const types = {
    //       name: 'name',
    //       age: 'age',
         
    //     };
    //     const sortProperty = types[type];
    //     console.log(sortProperty);
    //     const sorted = [...s_data].sort((a, b) => a.sortProperty - b.sortProperty);
    //     setS_data(sorted);
    //   };
    //   sortArray(sortType);
    //   student_data()
    // }, [sortType]); 

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
            i._id !== e
        ))
        setS_data(new_data)

        axios.delete(`http://localhost:2244/students/${e}`)
        .then((res) => (
            console.log("while removing",res)
        ))
        console.log(e)
    }
    const handlename=()=>{
        
        let y= [...s_data].sort((a,b) => { 
            
                let fa = a.name.toLowerCase(),
                    fb = b.name.toLowerCase();
                 //   console.log("sorting",fa,fb);
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            })


 
        setS_data(y);
    }
    const handleage=()=>{
        
       // console.log("sorting",sortes);
           let x=[...s_data].sort((a,b) =>{
            console.log("a",a.age,"b",b.age)   
            return a.age - b.age})   
           setS_data(x)
            
    }



    return (

        <div className={styles.main}>
            <div>
                <button onClick={handlename}>Sort By Name</button>
                <button onClick={handleage}>Sort By Age</button>
            </div>
            
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
                                <div>{e.age}</div>
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
