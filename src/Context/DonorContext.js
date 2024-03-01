import * as React from "react";

const DonorContext = React.createContext();

export const DonorProvider = ({ children }) => {
  const [donorData, setDonorData] = React.useState(null);

  return (
    <DonorContext.Provider value={{ donorData, setDonorData }}>
      {children}
    </DonorContext.Provider>
  );
};

export const useDonorContext = () => React.useContext(DonorContext);

export default DonorContext;
