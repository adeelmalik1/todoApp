import React, { useState } from 'react';
import {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {useParams} from 'react-router-dom';
import styled from 'styled-components'
import Card from '../Components/Card';
const CardDetails = () => {
    const CardContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction:colum;
    
    justify-content: center;
    flex-wrap:wrap;
    background: #1f2229;
    overflow: hidden;
  `;
    const [uniqueTask, setUnique] = useState("");
    const {id} = useParams();
    const taskobj = useSelector((state) => state.addTask.data);
    useEffect(()=> {
        const filter = taskobj.find((item,index)=> index == id);
        setUnique(filter)
    },[])
    const title = uniqueTask.title;
    return(
        <CardContainer>
            <Card title={title}/>
        </CardContainer>
    )
}
export default CardDetails;