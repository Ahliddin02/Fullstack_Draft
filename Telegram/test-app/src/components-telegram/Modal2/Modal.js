import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Button, Modal } from "antd";
import { useState } from "react";

const Modal1 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {/* <Modal title="Basic Modal" visible={state} onOk={handleOk} onCancel={handleCancel}>
        <form action="">
          <h4>New Contact Please</h4>
          <input type="text" />
          <button>Add</button>
        </form>
      </Modal> */}
    </>
  );
};

export default Modal1;
