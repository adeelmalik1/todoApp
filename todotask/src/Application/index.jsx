import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Modal from "../Components/Modal";

const Application = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
    setTimeout(() => {
      navigate("/todo");
    }, 1000);
  }, [navigate]);
  return (
    <>
      <GlobalStyles />
      <div style={{ transform: "translateX(50px)" }}>
        <Modal isOpen={isOpen} close={() => setOpen(false)}>
          <h2>wellcome on TodoTask</h2>
        </Modal>
      </div>
    </>
  );
};

export default Application;