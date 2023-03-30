import { useState } from "react";

const App = () => {
   const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
   const [newName, setNewName] = useState("");

   const handleNewName = (event) => {
      console.log("what hapenning in event:", event.target.value);
      setNewName(event.target.value);
   };

   const addName = (event) => {
      event.preventDefault();
      console.log("add Name:", event.target);
      setPersons(persons.concat({ name: newName }));
      setNewName("");
      console.log("names after submit:", persons);
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
