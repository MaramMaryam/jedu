'use client'
import { useRouter } from 'next/navigation';
import { getLoginState } from '../utils/auth';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }: any) => {
    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = getLoginState();
        if (!isLoggedIn) {
            router.push('/login');
        }
    }, [router]);

    return (
        <div>
          {children}
          <Logout />
        </div>
      );
};

export default ProtectedRoute;