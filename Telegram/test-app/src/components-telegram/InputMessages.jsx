import { useState, useEffect } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BiSend } from "react-icons/bi";

function InputMessages({ contact, setMessages, messages }) {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://localhost:3002/message-list")
      .then((response) => response.json())
      .then((loadMessage) => setMessages(loadMessage));
  }, [messages]);

  const draft = localStorage.getItem("draft");
  const drafts = draft ? JSON.parse(draft) : [];

  useEffect(() => {
    const draft = drafts.find((draft) => {
      return draft.id === contact.id;
    });
    if (draft) {
      setText(draft.text);
    } else {
      setText("");
    }
  }, []);

  function onChange(e) {
    if (!contact.id) return;
    const value = e.target.value;
    setText(value);
    const draft = drafts.find((draft) => {
      return draft.id === contact.id;
    });
    console.log(value);
    if (draft) {
      draft.text = value;
    } else {
      drafts.push({
        id: contact.id,
        text: value,
      });
    }
    localStorage.setItem("draft", JSON.stringify(drafts));
  }
  console.log(text);

  // function onSendMessage(e) {
  //   e.preventDefault();

  //   fetch(`http://localhost:3002/message-save?text=${text}&&receiver=${contact.id}`);
  //   setText("");
  // }

  function onSendMessage(e) {
    e.preventDefault();
    fetch(`http://localhost:3002/message-save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        sender: 1000,
        receiver: contact.id,
      }),
    }).then((res) => console.log(res));
    setText("");
  }

  // const onSendMessage = () => {
  //   if (inputText.trim()) {
  //     addNew;
  //   }
  // };

  return (
    <form>
      <label>
        <input onChange={onChange} placeholder="Написать сообщения... " className="input" value={text} type="text" />

        <button className="microphon">
          <AiOutlinePaperClip className="clips__icon" />
          <BsEmojiSmile className="smile__icon" />
          <BiSend onClick={onSendMessage} />
        </button>
      </label>
    </form>
  );
}
export default InputMessages;
