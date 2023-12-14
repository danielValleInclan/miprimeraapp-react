import React from "react";

const FInputComponent = ({ nombre, cambiarNombre }) => {
  return (
    <div>
      <input value={nombre} onChange={(e) => cambiarNombre(e.target.value)} />
    </div>
  );
};

export default FInputComponent;
