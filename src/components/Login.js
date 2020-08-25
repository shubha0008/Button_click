import React, { Component } from 'react'
import { Redirect,Link } from 'react-router-dom'

export default class Login extends Component {
   constructor(props){
       super(props)
       let loggedIn = false
       this.state ={
        username:'',
        password: '',
        loggedIn

       }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
   }

   onChange(e){
       this.setState({
           [e.target.name] : e.target.value

       })
   }


//      componentDidMount = ({username,password}) => {
//     document.getElementById("submit")
//             .addEventListener("submit", fetch("https://app-demo-new.herokuapp.com/products",{
//                     method : "GET" ,
//                 })
//                 .then((res) => res.json())
//                 .then(member => {
// 		const validLogIn = member.find((mem) => mem.username === username && mem.password === password)
// 		if (validLogIn === undefined) {
// 			alert('Invalid Email and Password')
// 		} else {
//             console.log(username,password)
// 			localStorage.setItem('user_id', validLogIn.id)
// 			this.setState({
//                 loggedIn: true,
//                 username:username,
//                 password: password,
//             })
//         }})
//                 .catch((err) => {
//                     console.log("error");
//               }))
//   }

  	//  submitForm = ({ username, password }) => {
	// 	fetch("https://app-demo-new.herokuapp.com/products",{
    //         method : "GET",
    //     })
	// 	 .then((res) => res.json())
	// 	.then(member => {
	// 	const validLogIn = member.find((mem) => mem.username === username && mem.password === password)
	// 	if (validLogIn === undefined) {
	// 		alert('Invalid Email and Password')
	// 	} else {
    //         console.log(username,password)
	// 		localStorage.setItem('user_id', validLogIn.id)
	// 		this.setState({
    //             loggedIn: true
    //         })
    //     }})
    //     .catch((err) => {
    //         console.log("error");
    //     })
	// }

    render() {
        if(this.state.loggedIn){
            return <Redirect to="/Admin"/>
        }
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit ={this.submitForm}>
                    <input type="text" placeholder="username" name="username" value={this.state.username}
                    onChange={this.onChange}/>
                    <br/>
                    <input type="password" placeholder="password" name="password" value={this.state.password}
                    onChange={this.onChange}/>
                    <br/>
                    <input type="submit" id= "submit"/>
                    <br/>
                </form>
                <Link to = "/Signup">SignUp Here</Link>
            </div>
        )
    }
}
