import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, addDoc, collection, updateDoc, doc, query, where, getDocs } from "firebase/firestore"

const config = {
    apiKey: "AIzaSyCEhrGXdmN_dwBmJLxyJTnjkVHD8CgdH34",
    authDomain: "sakayqueue-4f4df.firebaseapp.com",
    databaseURL: "https://sakayqueue-4f4df-default-rtdb.firebaseio.com",
    projectId: "sakayqueue-4f4df",
    storageBucket: "sakayqueue-4f4df.appspot.com",
    messagingSenderId: "565381317293",
    appId: "1:565381317293:web:7ec4b37533dff551d33c24",
    measurementId: "G-HKH058NKB0"
};

const firebaseApp = initializeApp(config);
const auth = getAuth();
export const firestoreDatabase = getFirestore(firebaseApp);

export const createFunc = async (data, table) => {
    try {
        const docRef = await addDoc(collection(firestoreDatabase, table), data);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const updateUserFunc = async (data, role) => {
    const userRef = doc(firestoreDatabase, "users", role);

    await updateDoc(userRef, data);
}

export const updateBusFunc = async (data, name) => {
    const busRef = doc(firestoreDatabase, "bus", name);

    await updateDoc(busRef, data);
}

export const fetchFunc = async (setBusLocation, busNumber) => {
    const dataRef = query(collection(firestoreDatabase, "bus"));

    const querySnapshot = await getDocs(dataRef);
    querySnapshot.forEach((doc) => {
        if (doc.id === busNumber) {
            setBusLocation(doc.data());
        }

    });
}

export const registerUser = (data, setRegister) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user;
            setRegister({
                message: "Successfully Registered User",
                color: "lightgreen"
            });
        })
        .catch((error) => {
            setRegister({
                message: error.code,
                color: "red"
            });
        });
}

export const loginUser = (data, setLogin) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            var user = userCredential.user;
            setLogin({
                message: "Successfully Authenticated",
                color: "lightgreen"
            });
        })
        .catch((error) => {
            setLogin({
                message: error.code,
                color: "red"
            });
        });
}