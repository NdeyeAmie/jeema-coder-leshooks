import React, { useEffect, useState } from 'react'
import InputForm from './InputForm';

const Fomulaire = ({addUser ,  modifCodeurs, setModifCodeurs, updateUser }) => {
    const [ prenomInput , setPrenomInput ] = useState("");
    const [ nomInput , setNomInput ] = useState("");
    const [ emailInput , setEmailInput ] = useState("");
    const [ telephoneInput , setTelephoneInput ] = useState("");
    

    const handleSubmit = (e) => {
      e.preventDefault();

      const newUser = {
        id: modifCodeurs ? modifCodeurs.id : Math.floor(Math.random() * 1000),
        prenomInput,
        nomInput,
        emailInput,
        telephoneInput,
      };
  
      console.log(newUser);
  
      if (modifCodeurs) {
        updateUser(newUser);
    } else {
        addUser(newUser); 
    }
  
      setPrenomInput("");
      setNomInput("");
      setEmailInput("");
      setTelephoneInput("");
      setModifCodeurs(null);
    }
    
    useEffect(() => {
        if (modifCodeurs) {
            setPrenomInput(modifCodeurs.prenomInput);
            setNomInput(modifCodeurs.nomInput);
            setEmailInput(modifCodeurs.emailInput);
            setTelephoneInput(modifCodeurs.telephoneInput);
        }
    }, [modifCodeurs]);

    const inputs = [
      { label: "Prénom", type: "text", name: "prenomInput" },
      { label: "Nom" , type: "text", name: "nomInput" },
      { label: "Email" ,type: "t"}
      
    ]

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
           <div style={{maxWidth: 600, margin:"auto"}}>
                <div className="row">
                 <InputForm label="Prenom" type="text" name="prenomInput" id="prenomInput"
                 value={prenomInput} 
                 onChange={(e) => {
                  console.log(e.target.value)
                  setPrenomInput(e.target.value)    
                 }}
                  className="form-control"/>
                 <InputForm label="Nom" type="text" name="nomInput" id="nomInput"
                 value={nomInput} 
                 onChange={(e) => {
                  setNomInput(e.target.value)    
                 }}  
                  className="form-control"/>
                </div>

                <div className="row">
                 <InputForm label="Email" type="email" name="emailInput" id="emailInput"
                   value={emailInput} 
                   onChange={(e) => {
                    setEmailInput(e.target.value)    
                   }}
                 className="form-control"/>
                 <InputForm label="Telephone" type="text" name="telephoneInput" id="telephoneInput"
                   value={telephoneInput} 
                   onChange={(e) => {
                    setTelephoneInput(e.target.value)    
                   }}
                 className="form-control"/>
                </div>
                    {modifCodeurs == null ? (

                            <button
                                className="btn btn-success w-100 mt-3">
                                Ajouter
                            </button>
                    ) :(

                            <button 
                                className="btn btn-primary w-100 mt-3">
                                Modifier
                            </button>
                    )}
                      
                    
            </div>
            </form>
            
           </div>
  )
}

export default Fomulaire