import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVuhEtajSmmHY55H_yGMZ2_lZAQMDcl-0",
  authDomain: "blog-b6fc7.firebaseapp.com",
  projectId: "blog-b6fc7",
  storageBucket: "blog-b6fc7.appspot.com",
  messagingSenderId: "525388670451",
  appId: "1:525388670451:web:ea52e6ed1bb059fecf1e86",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();

export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const addPost = async (title, subheading, post, image, createdAt) => {
  try {
    await addDoc(collection(db, "Articles"), {
      title,
      subheading,
      post,
      image,
      createdAt,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
// Initialize Firebase
