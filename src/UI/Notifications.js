import { Bounce, toast } from "react-toastify";

export const notifyOnSuccess = (msg) => {
    toast.success(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });
};

export const notifyPending=(promise)=>{
toast.promise(
    promise,
    {
       pending: 'Sending email...',
      success: 'Email sent successfully',
      error: 'Failed to send email'
    }
)

}

export const notifyOnError = (msg) => {
    toast.error(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });

};