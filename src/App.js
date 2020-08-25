import React, {Component} from 'react';
import './App.css';
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom';
import Login from './components/Login'
import Admin from './components/Admin'
import Logout from './components/Logout'
import Signup from './components/Signup';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route  path="/Admin" component={Admin}/>
        <Route  path="/Logout" component={Logout}/>
        <Route  path="/Signup" component={Signup}/>
      </Switch>
      </BrowserRouter>
      
    )
  }
}

// import React, { useEffect, useState,useReducer } from 'react'
// import './App.css'
// import Login from './Login/Login'
// import 'react-activity-feed/dist/index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Logout from './Login/Logout';

// function App() {
// 	const [loggedIn, setLoggedIn] = useState(false)
// 	const [signUP, signUPPortal] = useState(false)
// 	const [currentUser, setCurrentUser] = useState('')

// 	useEffect(() => {
// 		fetch("http://localhost:4050/Members")
// 		.then((res) => res.json())
// 		.then(member => {
// 		 const userId = localStorage.getItem('user_id')
// 		if (userId) {
// 			setLoggedIn(true)
// 			let val = member.find((data) => data.id === userId)
// 			setCurrentUser(val.name)
// 		}},[])
// })
// 	const memberLogIn = ({ email, password }) => {
// 		fetch("http://localhost:4050/Members")
// 		 .then((res) => res.json())
// 		.then(member => {
// 		const validLogIn = member.find((mem) => mem.email === email && mem.password === password)
// 		if (validLogIn === undefined) {
// 			alert('Invalid Email and Password')
// 		} else {
// 			localStorage.setItem('user_id', validLogIn.id)
// 			signUPPortal(false)
// 			setLoggedIn(true)
// 		}})
// 	}

	

// 	return (
// 		<div className="App">
// 			{loggedIn === true ? (
// 			<div>
// 				<div><h1>Welcome {currentUser}</h1></div>
// 			<div>
	 		
// 	  </div>
// 	  <button onClick =  {() => {return(<Logout/>)}}>Logout</button>
// 	  </div>
// 			) : <Login memberLogIn={memberLogIn} />}
// 			{signUPPortal === false ? (null) : (<h1>Welcome New User</h1>)}
// 		</div>
// 	)
// }
export default App