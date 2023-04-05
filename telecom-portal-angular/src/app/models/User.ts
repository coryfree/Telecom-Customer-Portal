class User {
    userID: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;

    constructor(userID = 0, firstName = '', lastName = '', email = '', password = '') {
        this.userID = userID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        
    }
}
export default User;