'use client'
import { useRouter } from 'next/navigation';
import { getLoginState } from '../utils/auth';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }: any) => {
    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = getLoginState();
        if (!isLoggedIn) {
            router.('/login');
        }
    }, [router]);

    return children;
};

export default ProtectedRoute;