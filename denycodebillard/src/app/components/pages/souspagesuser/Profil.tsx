import { useEffect, useState } from "react";
import axios from "axios";

import { User as UserType } from "../../types/User";

import { XpBarre } from "./XpBarre";

export const Profil = () => {    

    const [user, setUser] = useState<UserType | null>(() => {
        // Load user from localStorage on component mount
        if (typeof window !== 'undefined' && window.localStorage) {
          const storedUser = localStorage.getItem("user");
          return storedUser ? JSON.parse(storedUser) : null;
        }
        return null;
    });
    
    console.log(user);

    useEffect(() => {
        (async () => {
            setUser(JSON.parse(localStorage.getItem("user") ?? ""));
        })();
    }, []);

    

    const calculXP = (xp: number | undefined) => {
        const a = 1; // Ajustez ce facteur selon vos besoins
        const b = 0.98; // Facteur de croissance (entre 0 et 1)
        const c = 10; // Facteur de normalisation

        if(typeof xp === 'undefined') return 0;
        return Math.floor(a * Math.log10(xp+1) * b/Math.pow(b, (xp+1)/c));
    }

    return (
        <div className="section_profil" id="profil_general">
            <div className="profile-container">
                <div className="profile-image">
                    <h2><span>{user?.firstname}</span> <span>{user?.name}</span></h2>
                </div>
                <div className="profile-info">
                    <p><strong>Niveau : {calculXP(user?.xp)}</strong> | <strong>Xp : {user?.xp}</strong></p>
                    <div className="xp-bar-container">
                        {user && <XpBarre lvl={calculXP(user?.xp)} xp = {user?.xp} />}
                    </div>
                    <p>Email : {user?.email}</p>
                    <p>Pseudo : {user?.pseudo}</p>
                </div>
            </div>
        </div>
    );
};