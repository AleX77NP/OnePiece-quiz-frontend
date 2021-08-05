export const validatePassword = (pwd: string): boolean => {
    return pwd.length >= 6
}

export const validateConfirmPassword = (pwd: string, confirmPwd: string): boolean => {
    return pwd === confirmPwd
}