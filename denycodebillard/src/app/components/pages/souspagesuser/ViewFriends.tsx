import { useEffect, useState } from "react";

import { User as UserType } from "../../types/User";

interface LoginProps {
    user: UserType | null;
  }

export const ViewFriends = () => {    

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
            <div className="view_friends">
                <div>Listes des amis</div>
                {/* <div id="listes_amis">
                    <div data-invitation="PiLe67" className="liste_ami">PiLe67</div><div data-invitation="BROKEN" className="liste_ami">BROKEN</div><div data-invitation="Nyny" className="liste_ami">Nyny</div>            </div> */}
            </div>
        </div>
    );
};