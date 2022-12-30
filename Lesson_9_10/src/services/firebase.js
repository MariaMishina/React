import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDatabase, ref } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAAJ7W6qp9Wy5BoKoHNstl_cZ4U5orE0z8",
  authDomain: "gb-homeworck.firebaseapp.com",
  projectId: "gb-homeworck",
  storageBucket: "gb-homeworck.appspot.com",
  messagingSenderId: "852894865327",
  appId: "1:852894865327:web:a67a84c93be974089b415a"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)

export const signUp = async (email, password) => await createUserWithEmailAndPassword(firebaseAuth, email, password)

export const signIn = async (email, password) => await signInWithEmailAndPassword(firebaseAuth, email, password)

export const logOut = async () => await signOut(firebaseAuth)

const db = getDatabase(app)

export const userRef = ref(db, 'user')
export const messagesRef = ref(db, 'messages')

export const getChatById = (chatId) => ref(db, `messages/${chatId}`)

export const getMessageListById = (chatId) => ref(db, `messages/${chatId}/messageList`)
