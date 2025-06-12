"use client";

import { createContext, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const notifySuccess = message => {
        toast.success(message);
    };

    const notifyError = message => {
        toast.error(message);
    };

    return (
        <ToastContext.Provider value={{ notifySuccess, notifyError }}>
            <ToastContainer position="top-right" autoClose={3000} />
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    return useContext(ToastContext);
};
