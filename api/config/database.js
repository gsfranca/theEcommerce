import { initializeApp } from "firebase-admin";

// Connection with the database
    var serviceAccount = require("path/to/serviceAccountKey.json");
    initializeApp({credential: cert(serviceAccount)});

// The database
    const db = getFirestore()

    export default db