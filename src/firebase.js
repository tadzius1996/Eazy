import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBS8P3KbAQqjweEMva5k6MKG3YYzs105DQ",
    authDomain: "eazy-website-ha-long.firebaseapp.com",
    projectId: "eazy-website-ha-long",
    storageBucket: "eazy-website-ha-long.appspot.com",
    messagingSenderId: "949420725410",
    appId: "1:949420725410:web:edf71b1f3f728aea36b3fb"
})

export const auth = app.auth()
export default app