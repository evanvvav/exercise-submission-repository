import { useState, useEffect } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import requestService from "./requests";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationStatus, setNotificationStatus] = useState("notification");

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
          .then((updatedPerson) => {
            (setPersons(
              persons.map((perosn) =>
                perosn.id === id ? updatedPerson : perosn,
              ),
            ),
              showNotification(`Changed ${newName}`, "notification"));
          });
      }
    } else {
      requestService.addPerson(enteredName).then((response) => {
        (setPersons([...persons, response]),
          showNotification(`Added ${newName}`, "notification"));
      });
    }
    (setNewName(""), setNewPhone(""));
  };

  const handdleDelete = (id) => {
    console.log("clicked id", id);
    requestService
      .deletePerson(id)
      .then(() => setPersons(persons.filter((person) => person.id !== id)))
      .catch((error) => {
        if (error.response.status === 404) {
          showNotification(
            `Information of ${persons.find((p) => p.id === id).name} has already been removed from server`,
            "error",
          );
        }
      });
  };

  const showNotification = (message, status) => {
    // setNotificationMessage(
    //   `Note '${note.content}' was already removed from server`,
    // );
    setNotificationMessage(message);
    setNotificationStatus(status);
    setTimeout(() => {
      setNotificationMessage(null);
    }, 5000);
  };

  useEffect(() => {
    requestService.getAll().then((response) => setPersons(response));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} status={notificationStatus} />
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
