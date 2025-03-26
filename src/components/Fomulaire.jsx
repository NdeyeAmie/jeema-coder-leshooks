import React, { useEffect, useState } from 'react'

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

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
           <div style={{maxWidth: 600, margin:"auto"}}>
                <div className="row">
                <div className="col-6 p-1">
                <label className="form-label">Prenom</label>
                 <input type="text" name="prenomInput" id="prenomInput"
                 value={prenomInput} 
                 onChange={(e) => {
                  console.log(e.target.value)
                  setPrenomInput(e.target.value)    
                 }}
                  className="form-control"/>
                </div>
                <div className="col-6 p-1">
                 <label className="form-label">Nom</label>
                 <input type="text" name="nomInput" id="nomInput"
                 value={nomInput} 
                 onChange={(e) => {
                  setNomInput(e.target.value)    
                 }}  
                  className="form-control"/>
                </div>
                </div>

                <div className="row">
                <div className="col-6 p-1">
                <label className="form-label">Email</label>
                 <input type="email" name="emailInput" id="emailInput"
                   value={emailInput} 
                   onChange={(e) => {
                    setEmailInput(e.target.value)    
                   }}
                 className="form-control"/>
                </div>
                <div className="col-6 p-1">
                 <label className="form-label">Telephone</label>
                 <input type="text" name="telephoneInput" id="telephoneInput"
                   value={telephoneInput} 
                   onChange={(e) => {
                    setTelephoneInput(e.target.value)    
                   }}
                 className="form-control"/>
                </div>
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