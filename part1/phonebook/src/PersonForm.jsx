const PersonForm = ({
  newName,
  handleNameChange,
  newPhone,
  handlePhoneChange,
  handleSubmit,
}) => {
  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newPhone} onChange={handlePhoneChange} />
      </div>
      <div>
        <button onClick={handleSubmit} type="submit">
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
