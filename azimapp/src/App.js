import React from 'react'
// import Todo from './Component/todolist/todo'
import Home from './Component/pages/Home'
import About from './Component/pages/About'
import Contact from './Component/pages/Contact'
import Navbar from './Component/pages/layout/Navbar'
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import AddUser from './Component/pages/users/AddUser'
import EditUser from './Component/pages/users/Edituser'
import Viewuser from './Component/pages/users/Viewuser'



function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/users/Viewuser/:id" component={Viewuser}/>
        <div className="d-flex justify-content-sm-center d-flex justify-content-md-center d-flex justify-content-lg-center">
        <Route exact path="/users/add" component={AddUser}/>
        <Route exact path="/users/edit/:id" component={EditUser}/>
       </div>
     

      </Switch>  
    </div>
    </Router>
  );
}

export default App
