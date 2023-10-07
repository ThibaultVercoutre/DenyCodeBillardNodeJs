import { useEffect, useState } from "react";
import { MdOutlineEmojiEvents } from "react-icons/md";

import axios from 'axios';

import { Signin } from "./pages/Signin";
import { Login } from "./pages/Login";
import { UserButton } from "./pages/UserButton";
import { Titre } from "./Titre";

import { User as UserType } from "./types/User";

interface AccueilProps {
    npage: number;
    setVarPage: (npage: number) => void;
  }

export const Accueil = ({ npage, setVarPage }: AccueilProps) => {
    
    const [showLogin, setShowLogin] = useState(false);
    const [showSignin, setShowSign] = useState(false);
    const [connect, setConnect] = useState("Inscription");
    const [connected, setConnected] = useState(false);

    const [user, setUser] = useState<UserType | null>(() => {
      // Load user from localStorage on component mount
      if (typeof window !== 'undefined' && window.localStorage) {
        const storedUser = localStorage.getItem("user");
        // const storedUser2 = storedUser ? JSON.parse(storedUser) : null;
        return storedUser ? JSON.parse(storedUser) : null;
      }
      return null;
    });

    const fetchUser = async () => {
        return (await axios.get(`http://localhost:5000/userbyemail/${user?.email}`)).data;
    };

    useEffect(() => {
      // Save user to localStorage whenever it changes
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setConnected(!connected);
        setShowLogin(false);
        setShowSign(false);
        setConnect("Inscription");
        // console.log(user);
      }
    }, [user]);

    useEffect(() => {
      (async () => {
        if (user) {
          // const user2 = await fetchUser();
          // setUser(user2);
        }
      })();
    }, []);

    const changeButton = () => {
      switch (connect) {
        case "Inscription":
          setShowSign(true);
          setConnect("Connexion");
          break;
        case "Connexion":
          setShowSign(false);
          setShowLogin(true);
          setConnect("Annuler");
          break;
        case "Annuler":
          setShowLogin(false);
          setConnect("Inscription");
          break;
      }
    }

    return (
        <div className="Accueil">
          <div className="nav-bar">
            <div>
              <a href="" id="version">V3.0</a>
              <a id="trophee"><MdOutlineEmojiEvents /></a>
            </div>
            <div id="inscrisption">
              {!connected && <div id="sign" onClick={changeButton}>{connect}</div>}
              {!connected && showLogin && <Login setUser={setUser} user={user} />}
              {!connected && showSignin && <Signin />}
              {connected && <UserButton user={user} connected={connected} setConnected={setConnected}/>}
            </div>
          </div>
          <div className="header">
            <header>
              <Titre />
            </header>
            <nav>
              <ul>
                <div className="nav-link" data-target="actualites" onClick={() => setVarPage(1)}>Actualités</div>
                <div className="nav-link" data-target="languages" onClick={() => setVarPage(2)}>Languages</div>
                <div className="nav-link" data-target="concepts" onClick={() => setVarPage(3)}>Notions</div>
                <div className="nav-link" data-target="rankings" onClick={() => setVarPage(4)}>Classements</div>
                <div className="nav-link" data-target="leaderboard" onClick={() => setVarPage(5)}>LeaderBoard</div>
                <div className="nav-link" data-target="exercise-of-the-week" onClick={() => setVarPage(6)}>Exercice de la semaine</div>
                {connected && <div className="nav-link" data-target="user-account" onClick={() => setVarPage(7)}>Compte utilisateur</div>}
                {connected && <div className="nav-link" data-target="user-chat" onClick={() => setVarPage(8)}>Chat</div>}
                {connected && user?.admin && <div className="nav-link" data-target="admin-account" onClick={() => setVarPage(9)}>Compte admin</div>}
              </ul>
            </nav>
          </div>
        </div>
    );

    
};