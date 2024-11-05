import { createContext, ReactNode, useCallback, useContext, useState } from 'react';

export interface ActionContext {
}

const initialActionState: Omit<
  ActionContext,
  'updateActionValue' | 'updateActionBulkValue'
> = {

};

export const ActionContext = createContext<ActionContext>({
  ...initialActionState,
  updateActionValue: () => {},
  updateActionBulkValue: () => {},
  setSelectedTabAnalysisTab: () => {},
});

export const useAction = () => {
  const context = useContext(ActionContext);
  if (!context) {
    throw new Error('useAction must be used within a ActionProvider');
  }
  return context;
};

export type ActionProviderProps = {
  children: ReactNode;
};

export const ActionProvider = ({ children }: ActionProviderProps) => {
  const [actionState, setActionState] = useState(initialActionState);

  const updateActionValue = useCallback((name: string, value: string[] | string | boolean) => {
    setActionState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const updateActionBulkValue = useCallback((payload: { [key: string]: string | string[] | boolean }) => {
    setActionState((prevState) => ({
      ...prevState,
      ...payload,
    }));
  }, []);


  return (
    <ActionContext.Provider
      value={{ ...actionState, updateActionValue, updateActionBulkValue }}
    >
      {children}
    </ActionContext.Provider>
  );
};
