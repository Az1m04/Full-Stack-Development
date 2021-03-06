import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {

        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get(" http://localhost:3004/users")
        setUsers(result.data)
    }
 const deleteUser= async id=>{
await axios.delete(`http://localhost:3004/users/${id}`)
loadUsers();
 }
    return (
        <>
            <div className="container ">
                <div className="py-4">

                
                    <table class="table border shadow table-responsive-sm table-responsive-lg table-responsive-md ">
                        <thead class="thead-dark ">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
            
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Link class="btn btn-primary mr-2 " to={`/users/Viewuser/${user.id}`}>view</Link>
                                       
                                        <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>    
                            
                                        <Link class="btn btn-banger" onClick={()=>{
                                            deleteUser(user.id)
                                        }}>Delete</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </>
    )
}

export default Home;
