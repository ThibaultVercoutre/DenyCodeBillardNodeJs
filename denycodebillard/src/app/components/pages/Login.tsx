import { useEffect, useState } from "react";
import { MdOutlineEmojiEvents } from "react-icons/md";
import axios from "axios";

import { User as UserType } from "../types/User";

interface LoginProps {
  user: UserType | null;
  setUser: (user: UserType) => void;
}

export const Login = ({ user, setUser }: LoginProps) => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });

    const handleRegister = async () => {

      const fetchUser = async () => {
          return (await axios.get(`http://localhost:5000/user/${formData.email}/${formData.password}`)).data;
      };

      const dataUser = await fetchUser();
      setUser(dataUser);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    return (
        <div className="login">
            <h3>Connexion</h3>
            <div className="log">
                <label>Email:</label>
                <input type="text" name="email" value={formData.email} onChange={handleInputChange} />

                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} />

                <div id="button" onClick={handleRegister}>Se connecter</div>
            </div>
        </div>
    );

    
};