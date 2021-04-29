import React from "react";

import FormSubmitButton from "Atoms/FormSubmitButton/FormSubmitButton";

const MainPage = () => {
  return (
    <div style={{ background: "red", padding: "2em" }}>
      <FormSubmitButton disable={false}>Piła</FormSubmitButton>
    </div>
  );
};

export default MainPage;
