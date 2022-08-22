import { BrowserRouter, Routes, Route} from "react-router-dom";
import AddUser from "./components/AddUser";
import UsersList from './components/UserList';
import NotFound from './components/NotFound';
import UpdateUser from "./components/UpdateUser";

function App(){
  return(
    <BrowserRouter>
      <div>
        <Routes>
          <Route path = "/" element = {<UsersList />} exact/>
          <Route path = "/add" element = {<AddUser />}/>
          <Route path = "/users/edit/:id" element = {<UpdateUser />}/>
          <Route path = "*" element = {<NotFound />}/>
        </Routes>
      </div>
    </BrowserRouter> 
  )
}

export default App;