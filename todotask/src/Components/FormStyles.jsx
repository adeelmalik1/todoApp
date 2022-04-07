import { Link } from "react-router-dom";
import styled from "styled-components";

import {btnReset, v} from '../Components/Variables';
export const SForm = styled.form`
    width: 37%;
    background: ${({ theme }) => theme.bg2};
    border-radius: ${v.borderRadius};
    padding: ${v.mdSpacing};
    border:1px solid blue;
`;
export const ClearBtn = styled.form `
    ${btnReset};
    width: 100%;
    position:relative;
    top:-53px;
    left:80px;
    background: ${({ theme }) => theme.bgSecondary};
    color:white;
    padding: ${v.smSpacing};
    display: flex;
    justify-content: center;
    border-radius: ${v.borderRadius};
    margin-top: ${v.mdSpacing};
    cursor: pointer;
`
export const SFormTitle = styled.span`
    font-size: 24px;
    font-weight: 600;
    color:white;
`;

export const SFormControl = styled.div`
    :first-of-type {
        margin-top: ${v.mdSpacing};
    }
    :not(:last-of-type) {
        margin-bottom: ${v.smSpacing};
    }
`;

export const SLabel = styled.label`
    display: block;
    font-size: 14px;
    font-weight: 600;
    margin-left: 4px;
    margin-bottom: calc(${v.smSpacing} / 4);
    color:white;
`;

export const SInput = styled.input`
    outline: none;
    border: 1px solid ${({ theme }) => theme.textFade};
    width: 95%;
    padding: ${v.smSpacing};
    font-size: 14px;
    border-radius: ${v.borderRadius};
`;

export const SButton = styled.button`
    ${btnReset};
    width: 100%;
    background: ${({ theme }) => theme.bgSecondary};
    color:white;
    padding: ${v.smSpacing};
    display: flex;
    justify-content: center;
    border-radius: ${v.borderRadius};
    margin-top: ${v.mdSpacing};
    cursor: pointer;
`;

export const SRedirect = styled.div`
    font-size: 12px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: ${v.smSpacing};
`;
export const SRedirectLabel = styled.span`
    color: ${({ theme }) => theme.text2};
`;

export const SRedirectLink = styled(Link)`
    color: ${({ theme }) => theme.primary};
`;