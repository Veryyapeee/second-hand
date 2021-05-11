import Spinner from "Atoms/Spinner/Spinner";
import React from "react";

interface Props {
  children: any;
  loading: boolean;
  error: Error | null;
  data: any;
}

const FetchHandler: React.FC<Props> = ({ loading, error, data, children }) => {
  if (error) {
    return <span>Error :/</span>;
  }
  if (loading) {
    return <Spinner />;
  }
  if (!data) {
    return <span>No data provided</span>;
  }
  if (data) {
    return children;
  }
};

export default FetchHandler;
