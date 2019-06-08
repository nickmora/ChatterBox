import React from "react";
import API from "../utils/API";

class Home extends React.Component{
    getUser(){
        API.getUser()
            .then(resp=>{
                this.setState({
                    user: resp.data.email
                })
            })
    }
    componentDidMount(){
        this.getUser()
    }
    render() {
        return (
            <p>
                Hello, user
            </p>
        )
    }
}

export default Home