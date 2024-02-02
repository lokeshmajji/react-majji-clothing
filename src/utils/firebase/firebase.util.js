// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  signInWithPopup,
  signInWithRedirect,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  getDocs,
  query,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0W3NHUf4NgmIYci6jnJ4sZrOHWPRRDqI",
  authDomain: "majji-clothing-db.firebaseapp.com",
  projectId: "majji-clothing-db",
  storageBucket: "majji-clothing-db.appspot.com",
  messagingSenderId: "922130925572",
  appId: "1:922130925572:web:9678262acfc26ec6c88d51",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const googleAuthProivider = new GoogleAuthProvider();
googleAuthProivider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleAuthProivider);

export const db = getFirestore();

export const addCollection = async (
  collectionKey,
  documentsToAdd,
  field = "title"
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  documentsToAdd.forEach((document) => {
    const docRef = doc(db, collectionKey, document[field].toLowerCase());
    batch.set(docRef, document);
  });
  await batch.commit();
  console.log("done");
};

export const getDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnaphsot = await getDocs(q);
  const categoryMap = querySnaphsot.docs.reduce((acc, documentSnapshot) => {
    const { title, items } = documentSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};
export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
  console.log("user auth from firebase", userAuth);
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};
