import React,{useEffect,useState} from 'react'
import {Link,useParams} from 'react-router-dom'
import axios from 'axios';

const Viewuser=()=> {
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    });

    const {id}=useParams();
    useEffect(()=>{
        loadUser();
    },[])
    const loadUser = async () => {
        const res= await axios.get(`http://localhost:3004/users/${id}`)
        setUser(res.data);
    };
    return (
        <> 
            <div className="conatainer p-5 w-75 mx-auto">
            <Link className="btn btn-primary px-10" to="/">
                back to home 
            </Link>
            <h1 className="display-4">User ID:{id}</h1>
            <hr/>
         <ul className="list-group">
             <li className="list-group-item">name:{user.name}</li>
             <li className="list-group-item">username:{user.username}</li>
             <li className="list-group-item">email:{user.email}</li>
         </ul>
        </div>       
        </>
    )
}

export default Viewuser
