
import { useState } from "react";
import axios from "axios";
import styles from "./studentform.module.css";
import { Redirect } from "react-router-dom";

export const Studentform = ({ prev, next }) => {
    // const [text, setText] = useState("");
    const [formdata,setFormdata]=useState({});
    const [status,setStatus]=useState();


    const handlechange = (e) => {
        const {name, value} = e.target;

        setFormdata({
            ...formdata,
            [name]: value
        })
        
    }
   

    const handlesubmit = (e) => {
            e.preventDefault();
            console.log(formdata);

            // if(e.target[0].value.length == 0 || e.target[1].value.length == 0){
            //     alert("Details Should Not be Empty")
            // }else{
            // }
            axios.post('http://localhost:2244/students', 
             formdata
            )
          .then((res)=>{
              console.log("status",res.status)
              return setStatus(res.status)
          }).catch((err)=>(setStatus("no")))
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
    


    return status === 200 ? (
        <Redirect to="/access" />
          
      ) : (
        <div >
            <form onSubmit={handlesubmit}>
                <h1 style={{ textAlign: "center" }}>Student Signup Form</h1>
                <div className={styles.card4main}>
                    <div className={styles.inputbox}>
                        <div style={{ display: "flex",alignItems:"center", gap: "20px" }}>
                            <h3>Enter your name</h3>
                            <input onChange={handlechange} name="name"
                                placeholder={"Enter your name"} type={"text"} />
                        </div>

                        <div style={{ display: "flex", gap: "20px" }}>
                            <h3>Enter your Email</h3>
                            <input onChange={handlechange} name="email"
                                type={"email"} placeholder={"Email"} />
                        </div>

                        <div style={{ display: "flex", gap: "20px" }}>
                            <h3>Make your password</h3>
                            <input onChange={handlechange} name="password"
                                type={"password"} placeholder={"password"} />
                        </div>

                        <div style={{ display: "flex", gap: "70px" }}>
                            <h3>Age</h3>
                            <input onChange={handlechange} name="age"
                                type={"number"} placeholder={"Age"} />
                        </div>

                        <div style={{ display: "flex", gap: "70px" }}>
                            <h3>City</h3>
                            <input onChange={handlechange} name="city"
                                type={"text"} placeholder={"city"} />
                        </div>

                        <div style={{ display: "flex", gap: "20px" }}>
                            <h3>Education</h3>
                            <input onChange={handlechange} name="education"
                                type={"text"} placeholder={"Education"} />
                        </div>

                        <div style={{ display: "flex", gap: "40px" }}>
                            <h3>Gender</h3>
                            <input onChange={handlechange} name="gender"
                                type={"text"} placeholder={"gender"} />
                        </div>

                        <div style={{ display: "flex", gap: "40px" }}>
                            <h3>Contact</h3>
                            <input onChange={handlechange} name="contact"
                                type={"text"} placeholder={"contact"} />
                        </div>
                    </div>
                    <div>
                        
                        <input className={styles.back4} type={"submit"} value={"submit"} />
                    </div>
                </div>


            </form>
        </div>
    );
};
