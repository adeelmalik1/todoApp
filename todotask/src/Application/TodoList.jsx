// import React from 'react'
// import styled from 'styled-components'
// // import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa'
// import Card from '../Components/Card'
// const StyledRoot = styled.div`
//   padding: 50px 12px;
// `
// const StyledContainer = styled.div`
//   max-width: 550px;
//   width: 100%;
//   margin: auto;
// `
// const Todo = () => {
//   const date = new Date().toLocaleDateString()
//   const onCommentClick = () => alert('You clicked comments')
//   const onLikesClick = () => alert('You clicked comments')
//   const onViewsClick = () => alert('You clicked comments')
//   const buttons = [
//     {
//       label: (
//         <>
//           {/* <FaCommentAlt /> */}
//            0 Comments
//         </>
//       ),
//       onClick: onCommentClick,
//     },
//     {
//       label: (
//         <>
//           {/* <FaThumbsUp />  */}
//           242 Likes
//         </>
//       ),
//       onClick: onLikesClick,
//     },
//     {
//       label: (
//         <>
//           {/* <FaRegEye />  */}
//           187288 Views
//         </>
//       ),
//       onClick: onViewsClick,
//     },
//   ]
//   return (
//     <StyledRoot>
//       <StyledContainer>
//         <Card
//           title="The Benefits of Green Apples"
//           date={date}
//           description="Green apples have a high fiber content which helps in increasing the
//       body's metabolism. While consuming an apple, make sure that you're not
//       tossing the peel in the trash. Consuming apple with its peel improves
//       the overall health. Due to its high fiber content, apple helps in
//       detoxification process. It keeps the liver and digestive system away
//       from harmful elements."
//           actions={buttons}
//         />
//       </StyledContainer>
//     </StyledRoot>
//   )
// }
// export default Todo;

import Card from '../Components/Card'
import styled from "styled-components";
import Form from '../Components/Input';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import TodoItems from './TodoItems';
import AddTask from '../Redux/actions/allActions'

const CardContainer = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

const Todo = ({task})=> {
  // console.log(task)
  const dispatch = useDispatch();
  const taskobj = useSelector((state) => state.addTask.data);
  const onSubmitHandler = (form, callback) => {
    callback();
    const obj = {title:form.title,completed:false}
    dispatch(AddTask(obj))
  }
  return (
    <>
      <CardContainer>
        <Form title={"Submit"} formArr={formArr} submitBtn={"Submit"} clearBtn={"Clear"} onSubmit={onSubmitHandler}/>
        </CardContainer>
        <TodoItems taskobj={taskobj}/>
      </>
  );
}

const formArr = [
  {
    label: "Add Task",
    name: "title",
    type: "text",
  },
];
export default Todo;