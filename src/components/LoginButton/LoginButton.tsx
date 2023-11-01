'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

import { Button } from '../ui/button';

const LoginButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className='flex items-center'>
        <p className='mr-2'>{session.user.name} 님</p>
        <Button onClick={() => signOut()}>로그아웃</Button>
      </div>
    );
  }

  return <Button onClick={() => signIn('google')}>로그인</Button>;
};

export default LoginButton;
