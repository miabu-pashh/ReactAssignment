import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { deleteUser } from "./userSlice";
import "./UserList.css";
import ReactionButtons from "./ReactionButtons";
import EmojiPicker from "emoji-picker-react";
import LikeButton from "./LikeButton";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  const renderCard = () =>
    users.map((user) => (
      <Link to={`user-details/${user.id}`}>
        <div className="card" key={user.id}>
          <div className="card1">
            <h2 className="H2">{user.title}</h2>
            <hr/>
            <h3>{user.categories}</h3>
            <br />
            <p className="font-normal text-gray-600">{user.content}</p>
          </div>
        </div>
      </Link>
    ));

  return (
    <div className="main">
      <Link to="/add-user">
        <div className="newPost">
          <Button>NEW POST</Button>
        </div>
      </Link>
      {/* <div className="grid gap-5 md:grid-cols-2"> */}
        {users.length ? (
          renderCard()
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No BLOGS TO SHOW
          </p>
        )}
      {/* </div> */}
    </div>
  );
};

export default UserList;
