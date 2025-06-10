export const getErrorMessage = (error, defaultMessage = "Ocorreu um erro inesperado.") => {
    console.log(error);

    return error?.response?.data?.message || defaultMessage;
};
