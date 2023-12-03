import React from "react";

const Confirmation = () => {
  return (
    <div
      className="card mt-5 mb-3 w-50 mx-auto"
      style={{
        backgroundColor: "var(--background-black-50, rgba(0, 0, 0, 0.50))",
        boxShadow: "0px 0px 20px 0px #000",
        color: "#fff",
        borderRadius: "10px",
      }}
    >
      <img
        src="https://i.etsystatic.com/35422719/r/il/2cd9e0/4016985140/il_fullxfull.4016985140_muhz.jpg"
        alt="Thank you"
      />
    </div>
  );
};

export default Confirmation;
