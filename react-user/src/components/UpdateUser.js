import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import userService from "../services/User.service";

const UpdateUser = () => {

    
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const saveUser = (u) => {
        u.preventDefault();

        const user = { id, name, age };

        userService.update(id ,user)
            .then(response => {
                console.log('User data updated successfully', response.data);
                navigate('/');
            })
            .catch(error => {
                console.log('Something went wrong', error);
            });

    }

    useEffect(() => {
        
        userService.get(id)
            .then(user => {
                
                setName(user.data.name);
                setAge(user.data.age);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            });
    }, [])
    return (
        <div className="container">
            <h3>Update User</h3>
            <hr />
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-6"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name" />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-6"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
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

export default UpdateUser;