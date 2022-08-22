import { useEffect, useState } from "react";
import userService from "../services/User.service";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const UsersList = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    init();
  }, [])

  const init = () => {
    userService.getAll()
      .then(response => {
        console.log('Printing the users data', response.data);
        setUsers(response.data)
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }
  const handleDelete = id => {
    var showtxt = document.querySelector('.show');

    if (window.confirm('Sure?') === true) {
      userService.remove(id)
      .then(response => {
        console.log('User delete successfully', response.data);
        init();
      }).catch(error => {
        console.log('Something went wrong', error);
      })
    } else {
      showtxt.innerHTML = '您已取消確認';
    }
    
  }

  return (
    <div className="container">
      <h3  align="center">List of User</h3>
      <hr />
      <div>
        <Link to="/add" className="btn btn-primary md-2" >Add User</Link>
        <hr />
        <table className="table table-border table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link className="btn btn-info" to={`/users/edit/${user.id}`}>Update</Link>
                    <button className="btn btn-danger ml-2" onClick={(e) => { handleDelete(user.id) }}> Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersList;
