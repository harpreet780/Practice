import { ThemeProvider } from '@material-ui/core';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Toastify = () => {
    const [status, setStatus] = useState(false);
    const notify = () => {
        if (status === true) {
            toast.success('Success', {});
        }
        else {
            toast.error('Failed', {});
        }
    }
    return (
        <div>
            <button onClick={notify}>Toaster</button>
            <ToastContainer
                autoClose={1500}
                position="top-center"
                limit={1}
                pauseOnHover={true}
                closeOnClick={true}
            />
        </div>
    );
}
export default Toastify;