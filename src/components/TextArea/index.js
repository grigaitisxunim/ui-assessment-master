import React from "react";
import * as C from "./styles";

const Textarea = ({ type, placeholder, value, onChange, id }) => {
  return (
    <C.textarea
      id={id}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
