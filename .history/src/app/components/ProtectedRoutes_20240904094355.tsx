'use client'
import { useRouter } from 'next/navigation';
import { getLoginState } from '../utils/auth';
import { useEffect } from 'react';
import Logout from './Logoutbtn';

const ProtectedRoute = ({ children }: any) => {
    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = getLoginState();
        if (!isLoggedIn) {
            router.push('/login');
        }
    }, [router]);

    return (
        <div children;>
          <Logout />
          {children}
        </div>
      );
};

export default ProtectedRoute;