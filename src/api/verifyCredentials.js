export default async function verifyCredentials(email, password) {
    console.log(`verifyCredentials verifying email ${email} and password ${password}`);
    const users = {
        "Jeffmabney@gmail.com": {
            loggedIn: false,
            profile: {
                email: 'Jeffmabney@gmail.com',
                password: 'password',
                name: 'Jeff',
                lastName: 'Abney'
            }
        },
    }
    //send email and password to back to verify
    if (users[email].profile.password === password) {
        return users[email];
    }
    return false;
}