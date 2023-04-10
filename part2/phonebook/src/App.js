import { useState } from "react";

const App = () => {
   const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
   const [newName, setNewName] = useState("");

   const handleNewName = (event) => {
      console.log("typing:", event.target.value);
      setNewName(event.target.value);
   };

   const addName = (event) => {
      event.preventDefault();
      if (persons.some((element) => element.name === newName)) {
         alert(`${newName} is already added to phonebook`);
         console.log(newName, "is already added to phonebook");
      } else {
         console.log("new name:", event.target);
         setPersons(persons.concat({ name: newName }));
         setNewName("");
      }
   };

   return (
      <div>
         <h2>Phonebook</h2>
         <form onSubmit={addName}>
            <div>
               name: <input value={newName} onChange={handleNewName} />
            </div>
            <div>
               <button type="submit">add</button>
            </div>
         </form>
         <h2>Numbers</h2>
         {persons.map((person) => (
            <p key={person.name}>{person.name}</p>
         ))}
      </div>
   );
};

export default App;
