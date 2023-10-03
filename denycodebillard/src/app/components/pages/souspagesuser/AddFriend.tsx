import { useEffect, useState } from "react";
import axios from "axios";

import { User as UserType } from "../../types/User";


export const AddFriend = () => {

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

    return (
        <div className="section_profil">
            <div className="view_add_friends">
                <div>Listes des invitations d'amis</div>
                <div id="listes_demande">
                    <div data-invitation="nightskare" className="demande_ami">nightskare
                        <div>
                            <span data-name="nightskare" className="accept_friend material-symbols-outlined">done</span>
                            <span data-name="nightskare" className="refuse_friend material-symbols-outlined">close</span>
                        </div>
                    </div>            
                </div>
            </div>
        </div>
    );
};