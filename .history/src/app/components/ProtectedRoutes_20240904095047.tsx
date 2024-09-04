'use client'
import { useRouter } from 'next/navigation';
import { getLoginState } from '../utils/auth';
import { useEffect } from 'react';
import Logout from './Logoutbtn';
import BackButton from './Backbutton';

const ProtectedRoute = ({ children }: any) => {
    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = getLoginState();
        if (!isLoggedIn) {
            router.push('/login');
        }
    }, [router]);

    return (
        <div className='bg-gray-800 '>
            <div className='flex justify-between mb-4 '>
                <Logout />
                    <BackButton />
                {/* <div className='flex justify-between mb-4 '>
                </div> */}
            </div>
                {children}
        </div>
    );
};

export default ProtectedRoute;