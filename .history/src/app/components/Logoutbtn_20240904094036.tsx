import { useRouter } from 'next/navigation';
import { setLoginState } from '../utils/auth';

const Logout = () => {
  const router = useRouter();

  const handleLogout = () => {
    setLoginState(false);
    router.push('/login');
  };
  

  return (
    <button 
    className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
    onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;