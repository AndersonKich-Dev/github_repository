import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  export default function Tost({type, message}){

    switch (type) {
      case 'success':
        toast.success(message);
        break;
      case 'warn':
        toast.warn(message);
        break;
      case 'error':
        toast.error(message);
        break;
      default:
        toast.info(message);
    }
    
    return (
      <div>        
        <ToastContainer />
      </div>
    );
  }