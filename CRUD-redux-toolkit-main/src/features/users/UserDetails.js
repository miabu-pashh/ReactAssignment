import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addUser } from "./userSlice";

import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { deleteUser } from "./userSlice";
import LikeButton from "./LikeButton";
import "./UserDetails.css";

const UserDetails = () => {
  const params = useParams();
  const users = useSelector((store) => store.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const existingUser = users.filter((user) => user.id === params.id);
  //   console.log(params.id);
  const { title, categories, content } = existingUser[0];

  const [values, setValues] = useState({
    title,
    categories,
    content,
  });

  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
    navigate("/");
  };

  return (
    <div className="div1">
      <div className="back">
        <Link to={`/`}>
          <Button>👈</Button>
        </Link>
      </div>

      <div className="flex gap-10" id="div2">
        <LikeButton />

        <Link to={`edit-user/${params.id}`}>
          <Button>EDIT</Button>
        </Link>
        <Button onClick={() => handleRemoveUser(params.id)}>Delete</Button>
      </div>

      <div
        className="content"
        // className="bg-gray-300 p-5 flex items-center justify-between"
        key={params.id}
      >
        <div className="next">
          <h2>{values.title}</h2>
          <hr/>
          <h3>{values.categories}</h3>
          {/* <span className="font-normal text-gray-600">{values.categories}</span> */}
          <br />
          <span className="font-normal text-gray-600">{values.content}</span>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
