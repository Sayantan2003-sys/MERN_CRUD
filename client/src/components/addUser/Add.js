import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios"
import toast from "react-hot-toast";
import "./add.css";
const Add = () => {

    const [user, setUser] = useState({ fname: "", lname: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/api/create", user);
            toast.success("User added successfully!");
            navigate("/");
        } catch (error) {
            toast.error("Failed to add User")
        }
    };

    return (
        <div className="addUser">
            <Link to={"/"}><IoMdArrowRoundBack />Back</Link>
            <h3>Add New User</h3>
            <form className="addUserForm" onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="fname" onChange={handleChange} placeholder="First Name" />
                </div>
                <div className="inputGroup">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lname" onChange={handleChange} placeholder="Last Name" />
                </div>
                <div className="inputGroup">
                    <label htmlFor="Email">Email</label>
                    <input type="email" id="email" name="email" onChange={handleChange} placeholder="Email" />
                </div>
                <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={handleChange} placeholder="Password" />
                </div>
                <div className="inputGroup">
                    <button type="submit">ADD USER</button>
                </div>
            </form>
        </div>
    );
};
export default Add;