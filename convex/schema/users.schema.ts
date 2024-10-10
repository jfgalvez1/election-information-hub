export default {
    users: {
        username: { type: "string", unique: true },
        password: { type: "string" } // This should store the hashed password
    }
};
