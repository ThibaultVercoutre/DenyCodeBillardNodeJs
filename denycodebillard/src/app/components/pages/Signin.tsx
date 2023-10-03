import { useEffect, useState } from "react";
import { MdOutlineEmojiEvents } from "react-icons/md";
import axios from "axios";


export const Signin = () => {
    const [pseudoError, setPseudoError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [formComplete, setFormComplete] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        firstname: "",
        pseudo: "",
        birthday: "",
    });
    
    const DejaPris = async (type: string, param: string) => {
        const fetchLanguages = async () => {
          return (await axios.get(`http://localhost:5000/userby${type}/${param}`)).data;
        };

        const users = await fetchLanguages();

        if(users.length > 0) {
          return true;
        }else{
          return false;
        }
    }

    const handleRegister = async () => {
        const isFormComplete = Object.values(formData).every((value) => value.trim() !== '');
        setFormComplete(isFormComplete);

        setPseudoError(false);
        setEmailError(false);

        if(await DejaPris("pseudo", formData.pseudo) && await DejaPris("email", formData.email)) {
          setPseudoError(true);
          setEmailError(true);
          return;
        }
        if (await DejaPris("pseudo", formData.pseudo)) {
          setPseudoError(true);
          return;
        }
        if (await DejaPris("email", formData.email)) {
          setEmailError(true);
          return;
        }

        try {
            const response = await fetch("http://localhost:5000/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });
      
            if (response.ok) {
              console.log("Inscription réussie !");
            } else {
              console.error("Erreur lors de l'inscription :", response.statusText);
            }
          } catch (error) {
            console.error("Erreur lors de la requête :", error);
          }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    // Vérifiez si tous les champs sont remplis
    

    
    return (
        <div className="login">
            <h3>Inscription</h3>
            <form>
                <label>Email:</label>
                <input type="text" name="email" value={formData.email} onChange={handleInputChange} className={`${emailError ? "input-error" : ""} ${formComplete ? "input-valid" : ""}`}/>

                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} className={formComplete ? "input-valid" : ""}/>

                <label>Nom:</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} className={formComplete ? "input-valid" : ""}/>

                <label>Prénom:</label>
                <input type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} className={formComplete ? "input-valid" : ""}/>

                <label>Pseudo:</label>
                <input type="text" name="pseudo" value={formData.pseudo} onChange={handleInputChange} className={`${pseudoError ? "input-error" : ""} ${formComplete ? "input-valid" : ""}`}/>

                <label>Date de naissance:</label>
                <input type="date" name="birthday" value={formData.birthday} onChange={handleInputChange} className={formComplete ? "input-valid" : ""}/>

                <div id="button" onClick={handleRegister}>S'inscrire</div>
            </form>
        </div>
    );

    
};

