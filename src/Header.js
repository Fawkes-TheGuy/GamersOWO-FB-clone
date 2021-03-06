import React from "react";
//import App2 from 'gamers-fb-clone/react-app2/src'
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ReactDOM from "react-dom";
import "./index.css";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import { useStateValue } from "./StateProvider";
import { ChatEngine } from "react-chat-engine";
import AppChat from "./AppChat";
import { useAuth } from "./AuthContext";

export function launchChat() {
  ReactDOM.render(<AppChat />, document.getElementById("root"));
  //ReactDOM.render(<AppChat />, document.createElement('root'));
  //Element.attachShadow(AppChat);
}

//export function ShadowContent({ root, newChat})

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn.discordapp.com/attachments/885634202593296385/902490745825558568/4550_-_Logo_Design.png"
          alts=""
        />
        <div className="header_input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>

      <div className="header_center">
        <div className="header_option header_option--active">
          <a target="blank" href="">
            <HomeIcon fontSize="large" />
          </a>
        </div>

        <div className="header_option">
          <a target="blank" href="https://www.youtube.com/">
            <SubscriptionsIcon fontSize="large" />
          </a>
        </div>

        <div className="header_option">
          <a target="blank" href="">
            <SupervisedUserCircleIcon fontSize="large" />
          </a>
        </div>
      </div>

      <div className="header_right"></div>
      <div className="header_info">
        <a target="blank" href="">
          <AccountCircleIcon src={user.photoURL} />
        </a>
        <h4>{user.displayName}</h4>
      </div>
      <a target="_blank" href="https://www.youtube.com/watch?v=B-kxUMHBxNo">
        <AddIcon />
      </a>
      <a target="_blank" href="https://amazing-mclean-9eabed.netlify.app">
        <ForumIcon />
      </a>
    </div>
  );
}

export default Header;
