import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const LogOut = () => {
      const navigate = useNavigate()
      const handleLogout = () => {
            localStorage.removeItem('token');
            toast.success('Log Out Successfully!')
            navigate("/")
      }
      return <button onClick={handleLogout} className="text-gray-700 tracking-wide">Logout</button>

};

export default LogOut;