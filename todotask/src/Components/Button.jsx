import React from 'react';
import styled from 'styled-components';

const Buttontest = styled.button`
background-color:green;
width:150px;
height:50px;
`


const Button = ({text,clickHandler}) => {
    return(
        <>
           <Buttontest>
               <button onClick={clickHandler}>{text}</button>
           </Buttontest>
        </>
    )
}

export default Button;