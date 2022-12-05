import React from 'react';
import UIStateProvider, { initialUIState } from './hooks/useUiState';

type StoreProps = {
  children: React.ReactNode;
};

export default function Store(props: StoreProps): JSX.Element {
  return (
      <UIStateProvider { ...initialUIState }>
        {props.children}
      </UIStateProvider>
  );
}