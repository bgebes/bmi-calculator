import React, { createContext, useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const BMIContext = createContext();

export default function BMIContextProvider({ children }) {
  const [BMIInfo, setBMIInfo] = useState({
    weight: 250,
    height: 150,
    bmi: 0,
  });

  return useCallback(
    <BMIContext.Provider value={[BMIInfo, setBMIInfo]}>
      {children}
    </BMIContext.Provider>,
    [BMIInfo, setBMIInfo]
  );
}

BMIContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useBMI = () => useContext(BMIContext);
