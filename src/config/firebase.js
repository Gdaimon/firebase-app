import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  getDocs,
  getDoc,
  query,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBd8k4Psv5MFSNkZ8oMNE6dA5ELqjKSicw",
  authDomain: "lista-tareas-7bb92.firebaseapp.com",
  projectId: "lista-tareas-7bb92",
  storageBucket: "lista-tareas-7bb92.appspot.com",
  messagingSenderId: "924456057363",
  appId: "1:924456057363:web:f2a36a194d59c50eb91de6",
  measurementId: "G-B9NS10QZL3",
};

initializeApp(firebaseConfig);
const database = getFirestore();

// Guardar
export const guardarDatabase = async (nombreDatabase, data) => {
  try {
    const response = await addDoc(collection(database, nombreDatabase), data);
    console.log(response);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Consultar todos los documentos (Coleccion)
export const consultarDatabase = async (nombreDatabase) => {
  try {
    const response = await getDocs(query(collection(database, nombreDatabase)));
    const elementos = response.docs.map((doc) => {
      const document = {
        id: doc.id,
        ...doc.data(),
      };
      return document;
    });
    console.log(elementos);
    return elementos;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Consultar un documento
export const consultarDocumentoDatabase = async (nombreDatabase, id) => {
  try {
    const response = await getDoc(doc(database, nombreDatabase, id));
    const document = {
      id: response.id,
      ...response.data(),
    };
    return document;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Actualizar un documento
export const actualizarDocumentoDatabase = async (nombreDatabase, id, data) => {
  try {
    const response = await updateDoc(doc(database, nombreDatabase, id), data);
    console.log(response);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Eliminar un documento
export const eliminarDocumentoDatabase = async (nombreDatabase, id) => {
  try {
    const response = await deleteDoc(doc(database, nombreDatabase, id));
    console.log(response);
  } catch (error) {
    throw new Error(error.message);
  }
};
