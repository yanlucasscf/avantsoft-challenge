export const getErrorMessage = (error, defaultMessage = "Ocorreu um erro inesperado.") => {
    return error?.response?.data?.message || defaultMessage;
};
