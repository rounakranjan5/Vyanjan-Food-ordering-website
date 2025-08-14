import { useState } from "react";

const UserFunc=(props)=>{
    let [cnt,setcnt]=useState(0);
    return(
        <div>
            <div className="user-card">
            <h2>Count : {cnt}</h2>
            <button onClick={()=>{
                // setcnt(cnt+1);
                // setcnt(++cnt); //this will also works
                setcnt(cnt++); //this will also work

            }}>Increment Counter</button>
            <h2>Name : {props.name}</h2>
            <h2>Location : {props.location}</h2>
            <h2>Github : rounakranjan5</h2>
            </div>
        </div>
    )
}

export default UserFunc;