import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Signup extends Component {

    onSave = async(e) => {
        e.preventDefault();
    
        try{
          var data = await fetch("https://app-demo-new.herokuapp.com/product",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body : JSON.stringify({
              username : document.getElementById("username").value,
              
              password : document.getElementById("password").value,
            }),
          });
          let finalResult = await data.json();
                console.log(finalResult);
                console.log("finalResult");
                }catch (error){
                console.log(error);
            }
        }

    

    render() {
        return (
            <div>
           <h3>Sign UP</h3>
           <form onSubmit={this.onSave}>
            
             <div className = "form-group row" >
             <label for="name" className = "col-sm-2 col-form-label">Name</label>
             <div className = "col-sm-10">
             <input type="text" id="username" name="name" className="inputDisplay" />
             </div>
             </div>

             <br />
            
             <div className = "form-group row" >
             <label for="password" className = "col-sm-2 col-form-label ">Password</label>
             <div className = "col-sm-10">
             <input type="password" id="password" name="password" className="inputDisplay"/>
             </div>
             </div>
            
             <br />
            
             <input type="submit" value="Submit" />
            
          </form>
            </div>
        )
    }
}
