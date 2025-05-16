import React, { useEffect, useState } from "react";
import "./user.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
const User = () => {
    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        const res = await axios.get("http://localhost:8000/api/getall");
        setUsers(res.data);
    };
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8000/api/delete/${id}`);
        toast.success("User Deleted...");
        loadUsers();
    };
    useEffect(() => {
        loadUsers();
    },[]);
    return(
       <div className="userTable">
        <Link to={"/Add"} className="addButton">Add User</Link>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>S.No</th>
                     <th>User Name</th>
                      <th>User Email</th>
                       <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((u, i) => (
                <tr key={u._id}>
                    <td>{i + 1}</td>
                    <td>{u.fname} {u.lname}</td>
                    <td>{u.email}</td>
                    <td className="actionButtons">
                        <button onClick={() => handleDelete(u._id)}><FaTrashAlt /></button>
                        <Link to={`/update/${u._id}`}><FaEdit /></Link>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
       </div>
    )
}
export default User;