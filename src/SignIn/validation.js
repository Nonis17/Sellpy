

const getError = (email, password) => {

    if ((password === null || password === '') && (email === null || email === '')) {

        return [null, "Fyll i din epostadress och lösenord"]

    } else if (email === null || email === '') {
        return ["Fyll i din epostadress", null];
    }
    return [null, null];

};



export { getError };