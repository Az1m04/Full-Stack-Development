import axios from 'axios';
import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
const AddUser = () => {
    let history =useHistory();
    const [user,setUser]=useState({
        name:"" ,
        username:"",
        email:""
    });
    const {name,username,email}=user;
    const onInputChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit= async (e)=>{
      e.preventDefault();
      await axios.post("http://localhost:3004/users",user);
      history.push("/")
    };

    return (
        <>
            <div className="container py-4">
                <div  className="w-75 mx-auto shadow p-5 ">
                <h1 className="text-center mb-4">Add User</h1>
                <form onSubmit={e=> onSubmit(e)}> 
                <div class="form-group">
                        <input type="text" class="form-control form-control-lg"
                        placeholder="Enter your name" 
                        name="name" 
                        value={name}
                        onChange={e=> onInputChange(e)} />
        
  </div> 
                    <div class="form-group">
                        <input type="text" class="form-control form-control-lg"
                        placeholder="Enter your user name"
                        name="username"
                        value={username}
                        onChange={e=> onInputChange(e)}/>
        
  </div> 
                        <div class="form-group ">
                            <input type="" class="form-control form-control-lg" 
                            placeholder="Enter your email"
                            name="email"
                            value={email}
                            onChange={e=> onInputChange(e)}/>
        
  </div>
  <button type="submit" class="btn btn-primary btn-block ">add user</button>
</form>

                        </div>
                        </div>


        </>
                    )
}
                    export default AddUser;
