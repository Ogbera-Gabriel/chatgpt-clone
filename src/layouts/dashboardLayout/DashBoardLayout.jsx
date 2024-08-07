import { Outlet, useNavigate } from 'react-router-dom';
import './dashboardLayout.css';
import { useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const DashBoardLayout = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate('/sign-in');
    }
  }, [userId, isLoaded, navigate]);

  if (!isLoaded) return <Loader2 className="loader" />;

  return (
    <div className="dashboard-layout">
      <div className="menu">MENU</div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
