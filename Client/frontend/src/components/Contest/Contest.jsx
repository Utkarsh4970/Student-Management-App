
import { useState } from "react";
import axios from "axios";
import styles from "./Contest.module.css";

export const Contest = ({ prev, next }) => {

    const [c_data, setC_data] = useState({});


    const handlechange = (e) => {

        // console.log(e.target.value)
        const { name, value } = e.target;

        setC_data({
            ...c_data,
            [name]: value
        })

    }
    // console.log(c_data);

    const handlesubmit = (e) => {
        e.preventDefault();

        // if(e.target[0].value.length == 0 || e.target[1].value.length == 0){
        //     alert("Details Should Not be Empty")
        // }else{
        // }
        axios.post('http://localhost:2244/contests',
            c_data
        )
        console.log(c_data)
        //   .then(getdata)
        //   .then(function (response) {
        //     //   getdata()
        //     // console.log(response);-
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

        // alert(" Post Successfull")

        //     console.log(e.target[0].value.length, e.target[1].value.length)


    }

    return (
        <div className={styles.main}>
            <h2>Create Contest</h2>
            <div className={styles.container}>
                <form className={styles.frm} onSubmit={handlesubmit}>
                    <input onChange={handlechange} name="title" type={"text"} placeholder="Contest Title" />
                    <input onChange={handlechange} name="tag" type={"text"} placeholder="Enter Tag" />
                    <select onChange={handlechange} name="c_type" className={styles.select}>
                        <option>Select</option>
                        <option>DSA</option>
                        <option>Coding</option>
                    </select>
                    <input onChange={handlechange} name="date" type={"date"} placeholder="Date" />
                    <input onChange={handlechange} name="time" type={"time"} placeholder="Time" />
                    <div >
                        <input className={styles.back4} type={"submit"} value={"submit"} />
                    </div>
                </form>
            </div>

        </div>
    );
};
