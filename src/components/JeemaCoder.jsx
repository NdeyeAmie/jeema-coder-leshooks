import React, { useState } from 'react'
import Fomulaire from './Fomulaire'

function JeemaCoder() {
    const [ codeurs , setCodeurs ] = useState(() => {
        return JSON.parse(localStorage.getItem("codeurs")) || [];
      });
    const [ modifCodeurs , setModifCodeurs ] = useState(null)

    const addUser = (newUser) => {
        if(!newUser.prenomInput || !newUser.nomInput || !newUser.emailInput || !newUser.telephoneInput ===""){
            alert("Veuillez remplir tous les champs.");
            return;
        }
      setCodeurs((prev) => {
        const updatedUsers = [...prev, newUser];
       localStorage.setItem("codeurs", JSON.stringify(updatedUsers));
        return updatedUsers;
      })
         
      console.log(newUser);
    };
  

    const deleteUser = (id) => {
        setCodeurs((prev) => prev.filter((newUser) => newUser.id !== id));
      };

    const modifInfoCodeurs = (id) => {
        const codeurToModify = codeurs.find((newUser) => newUser.id === id);
        console.log(modifCodeurs);
        
        setModifCodeurs(codeurToModify);
    }

    const updateUser = (updatedUser) => {
        setCodeurs((prev) => {
            const updatedUsers = prev.map((newUser) =>
                newUser.id === updatedUser.id ? updatedUser : newUser
            );
            // console.log(updateUser);
            
            localStorage.setItem("codeurs", JSON.stringify(updatedUsers));
            return updatedUsers;
        });
        setModifCodeurs(null); 
    };

  return <div className="py-4">
  <p className="text-center">JeemaCoder gestion utilisateurs</p>
  <Fomulaire addUser={addUser} 
  modifCodeurs={modifCodeurs}
 setModifCodeurs={setModifCodeurs}
 updateUser={updateUser} />

  <div>
   <div className="mt-5 container">
       <h3 className="text-center">Coders</h3>
       <table className="table">
<thead>
<tr>
<th scope="col">Prenom</th>
<th scope="col">Nom</th>
<th scope="col">Email</th>
<th scope="col">Telephone</th>
<th scope="col">Actions</th>
</tr>
</thead>
<tbody>
  {codeurs.length > 0 &&
    codeurs.map((codeur) => (
      <tr key={codeur.id}>
        <td>{codeur.prenomInput}</td>
        <td>{codeur.nomInput}</td>
        <td>{codeur.emailInput}</td>
        <td>{codeur.telephoneInput}</td>
        <td>
          <button className="btn bg-danger btn-sm mx-1"
          onClick={() => deleteUser(codeur.id)}
          >
            <i className="fa-solid fa-delete-left"></i>
          </button>
          <button className="btn bg-success btn-sm mx-1"
          onClick={() => modifInfoCodeurs(codeur.id)}
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
        </td>
      </tr>
    ))}
</tbody>

</table>
   </div>
  </div>
</div>
}

export default JeemaCoder