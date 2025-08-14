import UserClass from "./UserClass";
import UserFunc from "./UserFunc";
import React from "react";

// const About =()=>{
//     return (
//         <div className="about">
//             <h1>About Us</h1>
//             {/* <UserFunc name={"rounak(functional)"} location={"NEW DELHI"}/> */}

//             <UserClass name={"rounak(class)"} location={"New DELHI"}/>
//         </div>
//     )
// }

// import UserClass from "./UserClass";
class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("parent contructor called");
    }

    componentDidMount(){
        // console.log("parent componentDidMount called");
    }

    render(){
        // console.log("parent render called");
        return(
            <div className="about">
                <h1>About us</h1>

                <UserClass />
                {/* <UserClass /> */}
                {/* <UserClass name={"child 1"} location={"New Delhi"}/>
                <UserClass name={"child 2"} location={"Mumbai"}/> */}
            </div>
        )
    }
}

export default About;