export const validateEmail = (email: string): boolean => {
    var chrbeforAt = email.substr(0, email.indexOf('@'));
    console.log(chrbeforAt)
    if (!(email.trim().length > 127)) {
        if (chrbeforAt.length >= 2) {
            var re = /^(([^<>()[\]{}'^?\\.,!|//#%*-+=&;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            return re.test(email);
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export const validateUsername = (username: string): boolean => {
    return username.length > 5
}