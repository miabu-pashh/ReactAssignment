import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { addUser } from "./userSlice";
import { Link } from "react-router-dom";

import "./AddUser.css";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: "",
    categories: "",
    content: "",
  });

  const handleAddUser = () => {
    setValues({ title: "", categories: "", content: "" });
    // console.log(values);
    dispatch(
      addUser({
        id: uuidv4(),
        title: values.title,
        categories: values.categories,
        content: values.content,
      })
    );
    navigate("/");
  };

  {/* <TextField
        label="Title"
        value={values.title}
        onChange={(e) => setValues({ ...values, title: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Title' }}
      /> */}
      {/* <TextField
        label="Categories"
        value={values.categories}
        onChange={(e) => setValues({ ...values, categories: e.target.value })}
        inputProps={{ type: "text", placeholder: "Categories" }}
      /> */}
       {/* <TextField
        label="Content"
        value={values.content}
        onChange={(e) => setValues({ ...values, content: e.target.value })}
        inputProps={{ type: "text", placeholder: "Content here" }}
      /> */}

  return (

    <div className="First">
      <div className="second">
        
        <div className="flex flex-col">
          {/* <label className="mb-2 text-base text-gray-800">Title</label> */}
          <h3>Title</h3>

          <input
            className="bg-#DCDCDC-200 py-2 px-3 border-2 outline-none"
            label="Title"
            value={values.title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            inputProps={{ type: "text", placeholder: "Title" }}
            required
          />
        </div>

        <br />

        

        <div className="flex flex-col">
          {/* <label className="mb-2 text-base text-gray-800">Categories</label> */}
          <h3>Categories</h3>

          <input
            required
            className="bg-#DCDCDC-200 py-2 px-3 border-2 outline-none"
            label="Categories"
            value={values.categories}
            onChange={(e) =>
              setValues({ ...values, categories: e.target.value })
            }
            inputProps={{ type: "text", placeholder: "Categories" }}
          />




        </div>
        <br />

       

        <div>
          
          <h3>Content</h3>

          <textarea
            // className="Content"
            className="textarea-custom"
            label="Content"
            value={values.content}
            onChange={(e) => setValues({ ...values, content: e.target.value })}
            inputProps={{ type: "text", placeholder: "Content" }}
            required
          />
        </div>

        <div className="flex gap-10">
          <Button onClick={handleAddUser}>Submit</Button>

          <Button onClick={() => navigate(-1)}>Back</Button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
