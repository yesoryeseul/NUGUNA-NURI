'use client';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface IProviderProps {
  children: ReactNode;
}

const AuthSessionProvider = (props: IProviderProps) => {
  return <SessionProvider>{props.children}</SessionProvider>;
};
export default AuthSessionProvider;
