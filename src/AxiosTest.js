import axios from "axios";
import React from "react";



class AxiosTest extends React.Component{
    getData=()=>{
        axios
        .get('')
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
    render(){
        return(
            <div>
                <button type="button" onClick={this.getData}></button>
            </div>
        )
    }
}

export default AxiosTest;