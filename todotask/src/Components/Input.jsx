import React, { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Clear } from "../Redux/actions/allActions";

import {
  SButton,
  SForm,
  SFormControl,
  SFormTitle,
  SInput,
  SLabel,
} from "../Components/FormStyles";

import Button from "./Button";

const prepareForm = (formArr) => {
  return formArr.reduce((r, v) => ({ ...r, [v.name]: "" }), {});
};

const Form = ({ title, formArr, submitBtn, onSubmit }) => {
  const dispatch = useDispatch();
  const initialForm = useMemo(() => prepareForm(formArr), [formArr]);
  const [form, setForm] = useState(initialForm);
  const onChangeHandler = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const onSumbitHandler = () => onSubmit(form, () => setForm(initialForm));
  return (
    <SForm autoComplete={"off"}>
      <SFormTitle>{title}</SFormTitle>
      {formArr.map(({ label, name, type }, index) => (
        <SFormControl key={index}>
          <SLabel htmlFor={name}>{label}</SLabel>
          <SInput
            id={name}
            name={name}
            type={type}
            value={form[name]}
            onChange={(e) => onChangeHandler(e)}
          />
        </SFormControl>
      ))}
      <SButton
        onClick={(e) => {
          e.preventDefault();
          onSumbitHandler();
        }}
      >
        {submitBtn}
      </SButton>
      <Button text={"Clear"} clickHandler={() => dispatch(Clear())} />
    </SForm>
  );
};

Form.defaultProps = {
  title: "Task Manager",
  formArr: [
    {
      label: "Title",
      name: "title",
      type: "text",
    },
  ],
  submitBtn: "Submit",
  onSubmit: (form) => console.log(form),
  redirect: null,
};

export default Form;
