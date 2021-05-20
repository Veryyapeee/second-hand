import React from "react";

import HeaderClient from "Organism/HeaderClient/HeaderClient";
import Footer from "Organism/Footer/Footer";
import FetchHandler from "HOC/FetchHandler/FetchHandler";

import useGetTowns from "Api/client/getTowns";
import { Town } from "Utils/types";
interface Props {
  children: JSX.Element | JSX.Element[] | string;
}

// Context to pass towns
export const TownsContext = React.createContext<Town[]>([]);

const ClientTemplate: React.FC<Props> = ({ children }) => {
  // Fetch towns from API
  const { isLoading, data, error } = useGetTowns();

  return (
    <FetchHandler loading={isLoading} data={data} error={error}>
      <HeaderClient towns={data} />
      <TownsContext.Provider value={data}>{children}</TownsContext.Provider>
      <Footer />
    </FetchHandler>
  );
};

export default ClientTemplate;
