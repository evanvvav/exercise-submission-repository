import { useState, useEffect } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import requestService from "./requests";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const alreadyEntered = persons.some((person) => person.name === newName);
    const enteredName = {
      name: newName,
      number: newPhone,
    };

    if (alreadyEntered) {
      const id = persons.find((perosn) => perosn.name === newName).id;

      if (
        window.confirm(
          `${newName} is alraedy added to phonebook, replace the old number with a new one?`,
        )
      ) {
        requestService
          .replaceNumber({ id, enteredName })
          .then((updatedPerson) =>
            setPersons(
              persons.map((perosn) =>
                perosn.id === id ? updatedPerson : perosn,
              ),
            ),
          );
      }
    } else {
      requestService.addPerson(enteredName).then((response) => {
        setPersons([...persons, response]);
      });
    }
    (setNewName(""), setNewPhone(""));
  };

  const handdleDelete = (id) => {
    console.log("clicked id", id);
    requestService
      .deletePerson(id)
      .then(() => setPersons(persons.filter((person) => person.id !== id)));
  };

  useEffect(() => {
    requestService.getAll().then((response) => setPersons(response));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        newFilter={newFilter}
        handdleDelete={handdleDelete}
      />
    </div>
  );
};

export default App;
