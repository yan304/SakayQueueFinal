import { initializeApp } from "firebase/app";
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

    await updateDoc(userRef, {data});
}

export const fetchFunc = async (busNumber) => {
    const dataRef = query(collection(firestoreDatabase, "bus"));

    const querySnapshot = await getDocs(dataRef);
    querySnapshot.forEach((doc) => {
        if (doc.id === busNumber) {
            console.log(doc.id, " => ", doc.data());
        }
    });
}
