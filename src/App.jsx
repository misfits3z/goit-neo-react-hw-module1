
import userData from "./components/Profile/userData.json";
import Profile from "./components/Profile/Profile.jsx";
import friends from "./components/FriendList/friends.json"
import FriendList from "./components/FriendList/FriendList.jsx";
import './App.css'

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App
