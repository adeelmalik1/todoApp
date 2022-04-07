import React, { useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  position: fixed;
  top: 0;
  left: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  max-width: 90%;
  max-height: 90%;
  box-shadow: 0 3px 15px -3px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const HeaderRow = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ScrollDisabler = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`;

const Modal = ({ isOpen, close, children }) => {
  const contentRef = useRef();
  return (
    <>
      {isOpen && <>
        <Background>
        <Content ref={contentRef}>
          <HeaderRow>
          </HeaderRow>
          {children}
        </Content>
      </Background>
      <ScrollDisabler />
      </>
      }
    </>
  );
};

export default Modal;