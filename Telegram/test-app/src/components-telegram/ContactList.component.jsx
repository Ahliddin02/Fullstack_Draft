// import { ContactsData } from "../Data/Contacts.data";
import AddContact from "../components-telegram/Modal/AddContact";
import { useState, useEffect } from "react";

// const oldContactList = localStorage.getItem("contact");
// const newContact = oldContactList ? JSON.parse(oldContactList) : [];

export function ContactList({ onContactSelect }) {
  const onClickSelect = (selectedContact) => {
    onContactSelect(selectedContact);
  };
  const [fetchContact, setFetchContact] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/contacts-list")
      .then((response) => response.json())
      .then((loadMessage) => setFetchContact(loadMessage));
  }, []);

  // useEffect(async () => {
  //   const responseJSON = await fetch("http://localhost:3002/contacts-list");
  //   const responseObject = await responseJSON.json();
  //   // quotes = responseObject.quotes;
  // }, []);

  return (
    <div className="ContactList">
      <AddContact />
      {fetchContact.map((el) => (
        <div key={el.id} onClick={() => onClickSelect(el)}>
          <h2 className="ContactList__name">{el.name}</h2>
        </div>
      ))}
    </div>
  );
}
