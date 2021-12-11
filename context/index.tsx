import {createContext, useState} from 'react';

export const Context = createContext<any>(null);

export const ContextProvider = (props: any) => {
  const [userName, setUserName] = useState<string>('');
  const [secret, setSecret] = useState<string>('');

  const value: any = {
    userName,
    setUserName,
    secret,
    setSecret,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
