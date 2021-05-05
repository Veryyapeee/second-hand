import React from "react";
import { useQuery } from "react-query";

import HeaderClient from "Organism/HeaderClient/HeaderClient";
import Footer from "Organism/Footer/Footer";
import Spinner from "Atoms/Spinner/Spinner";

import getTowns from "Api/client/getTowns";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
}

const ClientTemplate: React.FC<Props> = ({ children }) => {
  // Fetch towns from API
  const { isLoading, data } = useQuery("towns", getTowns);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <HeaderClient towns={data} />
      {children}
      <Footer />
    </>
  );
};

export default ClientTemplate;
