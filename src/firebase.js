import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBU4YU9FqoypKS5bWXo4r77wsbCG2TMOaY",
  authDomain: "twitter-clone-73514.firebaseapp.com",
  projectId: "twitter-clone-73514",
  storageBucket: "twitter-clone-73514.appspot.com",
  messagingSenderId: "1029313309019",
  appId: "1:1029313309019:web:5d574ccdf9e3a6f261927e",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;
