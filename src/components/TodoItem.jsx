import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";
import "./TodoItem.css";

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();
  const handelCheck = () => {
    dispatch(setCheck(id));
  };
  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handelCheck}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
};

export default TodoItem;
