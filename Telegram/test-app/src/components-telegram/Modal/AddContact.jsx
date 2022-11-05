import React, { useState } from "react";
import "./AddContact.css";
import Menu from "./Menu/Menu";

const AddContact = () => {
  const [menuActive, setMenuActive] = useState(false);

  const items = [
    // { value: "Главная", href: "./main", icon: "" },
    { value: "Главная", href: "#", icon: "" },
    { value: "Добавить контакт", href: "#", icon: "" },
    { value: "Создать группу", href: "#", icon: "" },
    { value: "Создать канал", href: "#", icon: "" },
    { value: "Звонки", href: "#", icon: "" },
  ];
  return (
    <div className="app">
      <nav>
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
      </nav>
      <main></main>
      <Menu active={menuActive} setActive={setMenuActive} header={"Ahliddin"} items={items} />
    </div>
  );
};
export default AddContact;
