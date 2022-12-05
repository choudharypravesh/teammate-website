import React, { ReactNode, useContext, useState } from 'react'

export const initialUIState = {
  theme: 'dark',
  toggleTheme: () => {},
}

const UiStateContext = React.createContext(initialUIState);

export type UiStateProviderProps = {
  children?: ReactNode;
  theme: string;
  toggleTheme: () => void
};

const UiStateProvider = (props: UiStateProviderProps): JSX.Element => {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    setTheme('light')
  }
  return(
    <UiStateContext.Provider value={{theme: theme, toggleTheme: toggleTheme}}>
      {props.children}
    </UiStateContext.Provider>
  )
}

const useUiState = (): UiStateProviderProps => useContext(UiStateContext);

export { UiStateContext, useUiState };

export default UiStateProvider;
