const createUserWithEmailAndPassword = require("firebase/auth"); 
const auth = require("./firebase_options")
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

module.exports = {createUserWithEmailAndPassword};
