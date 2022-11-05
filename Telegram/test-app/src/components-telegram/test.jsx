import { ContactsData } from "../Data/Contacts.data";

// const newMessages = ContactsData;

localStorage.setItem("infoUser", JSON.stringify(ContactsData));
const newContactsData = JSON.parse(localStorage.getItem("infoUser"));

export function Test() {
  return (
    <div>
      {newContactsData.map((el) => (
        <span key={el.id}>
          <h1>{el.name}</h1>
        </span>
      ))}
    </div>
  );
}
