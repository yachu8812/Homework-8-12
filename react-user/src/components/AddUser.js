import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userService from "../services/User.service";

const AddUser = () => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();


    const saveUser = (u) => {
        u.preventDefault();

        const user = { id, name, age };
        
        //create
        userService.create(user)
            .then(response => {   
                console.log('User data added successfully', response.data);
                navigate('/');
            })
            .catch(error => {
                console.log('Something went wrong', error);
            });
    }
    return (
        <div className="container">
            <h3>Add New User</h3>
            <hr />
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-6"
                        id="id"
                        value={id}
                        onChange={(u) => setId(u.target.value)}
                        placeholder="Enter ID" />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-6"
                        id="name"
                        value={name}
                        onChange={(u) => setName(u.target.value)}
                        placeholder="Enter name" />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-6"
                        id="age"
                        value={age}
                        onChange={(u) => setAge(u.target.value)}
                        placeholder="Enter age" />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={(e) => saveUser(e)}>Save</button>
                </div>
            </form>
            <hr />
            <Link to="/">Back to List</Link>
        </div>
    );
}

export default AddUser;