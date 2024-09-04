import { useRouter } from 'next/navigation';
import { setLoginState } from '../utils/auth';

const Logout = () => {
  const router = useRouter();

  const handleLogout = () => {
    setLoginState(false);
    router.push('/login');
  };

  return (
    <button className='' onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;