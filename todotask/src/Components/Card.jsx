import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
} from "./CardStyles";

import Checkbox from "../Components/Checkbox";

import { SelectItems } from "../Redux/actions/allActions";
import Button from "../Components/Button";
import { Remove } from "../Redux/actions/allActions";

const Card = ({ title, date, imgUrl, index }) => {
  const dispatch = useDispatch();
  const [value, setCheckbox] = useState(false);

  const mainTainHash = (id) => {
    dispatch(SelectItems(id));
  };
  const clickHandler = (id) => {
    dispatch(Remove(id));
  };
  return (
    <CardWrapper key={index}>
      <CardImage background={imgUrl} />
      <NavLink to={`/todo/${index}`}>
        <CardTextWrapper>
          <CardTextDate>{date} days ago</CardTextDate>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
            temporibus omnis illum maxime quod deserunt eligendi dolor
          </CardTextBody>
        </CardTextWrapper>
      </NavLink>
      <CardStatWrapper>
        <CardStats>
          <Checkbox
            value={!value}
            checked={!value}
            onChange={(e) => {
              setCheckbox(!value);
              mainTainHash(index);
            }}
          />
        </CardStats>
        <CardStats>
          <Button clickHandler={() => clickHandler(index)} text="Delete" />
        </CardStats>
      </CardStatWrapper>
    </CardWrapper>
  );
};

export default Card;
