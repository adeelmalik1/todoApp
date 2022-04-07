import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from '../Components/Button'
import GlobalStyles from "./GlobalStyles";
import Modal from '../Components/Modal';
import { useNavigate } from 'react-router-dom';;

const Application = () => {
  const navigate = useNavigate()
  const [isOpen, setOpen] = useState(false);
  useEffect(()=>{
    setOpen(true)
    setTimeout(()=>{
      navigate('/todo');
    },2000)

  })
  return (
    <>
    <GlobalStyles/>
        <div style={{ transform: "translateX(50px)" }}>
          <Modal isOpen={isOpen} close={() => setOpen(false)}>
            <h2>wellcome on TodoTask</h2>
            <Button/>
          </Modal>
        </div>
    </>
  );
};

export default Application;