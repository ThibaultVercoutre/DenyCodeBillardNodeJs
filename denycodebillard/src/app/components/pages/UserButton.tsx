import { useEffect, useState } from "react";
import { MdLogout } from "react-icons/md";
import axios from "axios";

import { User as UserType } from "../types/User";

interface LoginProps {
    user: UserType | null;
    connected: boolean | undefined;
    setConnected: (connected: boolean) => void;
  }

export const UserButton = ({user, connected, setConnected}: LoginProps) => {

    const disconnected = () => {
        setConnected(!connected);
        localStorage.removeItem("user");
        console.log(localStorage.getItem("user"));
    }

    return (
        <div id="user">
            <div className="username">{user?.pseudo}</div>
            <div className="logout" onClick={disconnected}><MdLogout /></div>
        </div>
    );
};