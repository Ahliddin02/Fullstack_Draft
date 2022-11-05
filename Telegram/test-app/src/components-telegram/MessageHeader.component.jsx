import { BsThreeDotsVertical } from "react-icons/bs";
import { BsWindowSidebar } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

export function MessageHeader({ contact }) {
  return (
    <div className="MessageHeader">
      <h3>{contact.name}</h3>
      <BsThreeDotsVertical className="header__dots" />
      <BsWindowSidebar className="header__window" />
      <IoMdCall className="header__call" />
      <AiOutlineSearch className="header__search" />
    </div>
  );
}
