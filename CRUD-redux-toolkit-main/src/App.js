import { Route, Routes } from "react-router-dom";
import AddUser from "./features/users/AddUser";
import EditUser from "./features/users/EditUser";
import UserList from "./features/users/UserList";
import UserDetails from "./features/users/UserDetails";
import Header from "./components/Header";
import "./main.css";

function App() {
  return (
    <>
      <Header />
      <div className="div1">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user-details/:id" element={<UserDetails />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route
            path="/user-details/:id/edit-user/:id"
            element={<EditUser />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
