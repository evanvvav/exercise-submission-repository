const Persons = ({ persons, newFilter, handdleDelete }) => {
  return (
    <>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(newFilter.toLowerCase()),
        )
        .map((person) => (
          <p key={person.id}>
            {person.name} {person.number}{" "}
            <button
              onClick={() => {
                if (window.confirm(`Delete ${person.name}?`)) {
                  handdleDelete(person.id);
                }
              }}
            >
              delete
            </button>
          </p>
        ))}
    </>
  );
};

export default Persons;
