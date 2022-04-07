import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import styled from "styled-components";
import Form from "../Components/Input";

import { Clear } from "../Redux/actions/allActions";
import TodoItems from "./TodoItems";
import AddTask from "../Redux/actions/allActions";

const CardContainer = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

const Todo = () => {
  const dispatch = useDispatch();
  const taskobj = useSelector((state) => state.addTask.data);
  const onSubmitHandler = (form, callback) => {
    callback();
    const obj = { title: form.title, completed: false };
    dispatch(AddTask(obj));
  };

  return (
    <>
      <CardContainer>
        <Form
          title={"TaskManager"}
          formArr={formArr}
          submitBtn={"Submit"}
          clearBtn={"Clear"}
          onSubmit={onSubmitHandler}
          clearHander={() => dispatch(Clear())}
        />
      </CardContainer>
      <TodoItems taskobj={taskobj} />
    </>
  );
};

const formArr = [
  {
    label: "Add Task",
    name: "title",
    type: "text",
  },
];
export default Todo;
