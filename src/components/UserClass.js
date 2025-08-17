import React from "react"
class UserClass extends React.Component{

    constructor(props){
        super(props);

        // state is a reserved keyword in class components
        this.state={
            // cnt1:0,
            // cnt2:1

            avatar_url:"https://dummyimage.com/100x100",
            name:"dummy name",
            followers:-1,
            following:-1,
            login:"dummy login",
            // lc_badges:"https://dummyimage.com/100x100"
        }

        // console.log(this.props.name+" constructor called");
        console.log("contructor called");
    }

    async componentDidMount(){
        // console.log(this.props.name+" componentDidMount called"); 
        console.log("componentDidMount called");
        
        // api call
        const data=await fetch("https://api.github.com/users/rounakranjan5");
        const jsonData=await data.json()
        console.log(jsonData);

       

        this.setState({
            avatar_url:jsonData.avatar_url,
            name:jsonData.name,
            followers:jsonData.followers,
            following:jsonData.following,
            login:jsonData.login,


        })

      

        
        
    }

    componentDidUpdate(){
        console.log("componentDidUpdate called");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount called");
    }

    render(props){
        // let cnt1=this.state.cnt1;
        // let cnt2=this.state.cnt2;
        // console.log(this.props.name+" render called");
        console.log("render called");

        let {avatar_url,name,followers,following,login}=this.state
        return(
        <div>
            <div className="flex justify-between p-5">
            {/* <h2>Count1 : {cnt1}</h2>
            <h2>Count2 : {cnt2}</h2>
            <button onClick={
                ()=>{
                    //nver update state variables directly
                    // this.state.cnt1++;wrong way
                    // this.state.cnt2++;wrong way
                    this.setState({
                        cnt1:cnt1+1,
                        cnt2:cnt2+1
                    })
                    // this.setState({cnt1:++cnt1,cnt2:++cnt2}); //also works
                    // this.setState({cnt1:++this.state.cnt1,cnt2:++this.state.cnt2}); //also works
                    // this.setState({cnt1:this.state.cnt1+1,cnt2:this.state.cnt2+1}); //also works
                    // this.setState({cnt1:this.state.cnt1+1}); //also works    
                    // this.setState({cnt2:this.state.cnt2+1}); //also works
                    // but this will not work
                    // this.state.cnt1++; //this will not work  
                    // this.state.cnt2++; //this will not work
                    

                }
            }>Increase cnt1 and cnt2</button> */}
            <div className="user-info p-2">
            <h2 className="font-bold text-7xl">{name}</h2>
            {/* <h2>followers : {followers}</h2>
            <h2>following : {following}</h2> */}
            <h2 className="font-bold m-2">Github : {login}</h2>
            </div>
            <img src={avatar_url} alt="avatar" className="rounded-full 5 " />
            
            </div>
        </div>
    )
    }
}

export default UserClass;