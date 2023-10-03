import './css/useraccount.css'

import { useEffect, useState } from "react";

import { User as UserType } from "../types/User";

import { AddFriend } from "./souspagesuser/AddFriend";
import { Profil } from "./souspagesuser/Profil";
import { ViewFriends } from "./souspagesuser/ViewFriends";

interface LoginProps {
    user: UserType | null;
  }

export const UserAccount = () => {    

    return (
        <section id="user-account" className='content-section'>
            <div className="div_accueil"><a href="#" className="accueil" data-target="accueil">Accueil</a></div>
            <div id="contenu_profil">
                <AddFriend />
                <Profil />
                <ViewFriends />
            </div>
        </section>
    );
};