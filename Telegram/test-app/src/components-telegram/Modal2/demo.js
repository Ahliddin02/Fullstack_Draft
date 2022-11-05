import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Button, Modal } from "antd";
import { useState } from "react";

const Demo = () => {
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
      <Button type="primary" onClick={showModal}>
        Add Contact
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <form action="">
          <h4>New Contact Please</h4>
          <input type="text" />
          <button>Add</button>
        </form>
      </Modal>
    </>
  );
};

export default Demo;
