import React from "react";

import HeaderClient from "Organism/HeaderClient/HeaderClient";
import Footer from "Organism/Footer/Footer";
import FetchHandler from "HOC/FetchHandler/FetchHandler";

import useGetTowns from "Api/client/getTowns";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
}

const ClientTemplate: React.FC<Props> = ({ children }) => {
  // Fetch towns from API
  const { isLoading, data, error } = useGetTowns();

  return (
    <FetchHandler loading={isLoading} data={data} error={error}>
      <HeaderClient towns={data} />
      {children}
      <Footer />
    </FetchHandler>
  );
};

export default ClientTemplate;
