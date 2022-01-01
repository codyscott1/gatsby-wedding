import { Toast } from "react-bootstrap";
import React from "react";

const GuestReservedToast = ({ names }) => {
  if (!names || !names.length) {
    return null;
  }
  const getMessage = (names) => {
    if (names.length === 1) {
      return handleSingleName(names[0]);
    } else {
      return handleMultipleNames(names);
    }
  };
  const handleSingleName = (name) => `${name} has been reserved`;
  const handleMultipleNames = (names) =>
    names.reduce((accumulator, current, index) => {
      if (index === 0) {
        return current;
      } else if (index === names.length - 1) {
        return `${accumulator} & ${current} have been reserved`;
      } else {
        return `${accumulator}, ${current}`;
      }
    }, "");

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: "absolute",
        minHeight: "100px",
      }}
      className="text-success"
    >
      <Toast delay={3000} autohide>
        <Toast.Body>{getMessage(names)}</Toast.Body>
      </Toast>
    </div>
  );
};

export default GuestReservedToast;
