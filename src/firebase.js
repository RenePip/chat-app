import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCBCVr43LjzLgsyVsMmimP_hiMosEe9IhU",
    authDomain: "chat-example-b1b31.firebaseapp.com",
    projectId: "chat-example-b1b31",
    storageBucket: "chat-example-b1b31.appspot.com",
    messagingSenderId: "262358003866",
    appId: "1:262358003866:web:4eb1abd3fcb52a1456af23",
    measurementId: "G-ZW2QNZE9B7"

})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db,auth}

