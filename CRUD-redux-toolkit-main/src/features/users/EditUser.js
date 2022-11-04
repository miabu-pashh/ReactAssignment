import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { editUser } from "./userSlice";
import "./EditUser.css";

import { Link } from "react-router-dom";

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter((user) => user.id === params.id);
  const { title, categories, content } = existingUser[0];
  const [values, setValues] = useState({
    title,
    categories,
    content,
  });

  const handleEditUser = () => {
    console.log(params.id);
    console.log("the edit button was called");
    setValues({ title: "", categories: "", content: "" });
    dispatch(
      editUser({
        id: params.id,
        title: values.title,
        categories: values.categories,
        content: values.content,
      })
    );

    navigate("/");
  };

  return (
    <div className="editOne">
      <div className="second">
      <div className="flex flex-col">
        <h3>Title</h3>

        <input
          className="bg-#DCDCDC-200 py-2 px-3 border-2 outline-none"
          label="Title"
          value={values.title}
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          inputProps={{ type: "text", placeholder: "Title" }}
        />
      </div>

      <br />

      <div className="flex flex-col">
        <h3>Categories</h3>

        <input
          className="bg-#DCDCDC-200 py-2 px-3 border-2 outline-none"
          label="Categories"
          value={values.categories}
          onChange={(e) => setValues({ ...values, categories: e.target.value })}
          inputProps={{ type: "text", placeholder: "Categories" }}
        />
      </div>

      <br />

      <div>
        <h3>Content</h3>
        <textarea
           className="textarea-custom"
          label="Content"
          value={values.content}
          onChange={(e) => setValues({ ...values, content: e.target.value })}
          inputProps={{ type: "text", placeholder: "Content" }}
        />
      </div>
      <div className="flex gap-10">
        <Button onClick={handleEditUser}>UPDATE</Button>

        <Button onClick={() => navigate(-1)}>Back</Button>
      </div>
    </div>
    </div>
  );
};

export default EditUser;
