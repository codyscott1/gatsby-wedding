import { Toast } from "react-bootstrap";
import React, { useState } from "react";

const GuestReservedToast = ({ names }) => {
  const [isClosed, setIsClosed] = useState(false);
  if (!names || !names.length || isClosed) {
    return null;
  }

  const handleClick = () => setIsClosed(true);
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
      title="click to close reserved guests list"
      onClick={handleClick}
      className="text-success start-50 translate-middle"
    >
      <Toast>
        <Toast.Body>{getMessage(names)}</Toast.Body>
      </Toast>
    </div>
  );
};

export default GuestReservedToast;
