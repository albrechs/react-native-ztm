import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const authRequest = (app, email, password) => {
  return new Promise((resolve, reject) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password);
  });
};

export const authTransform = ({ results = [] }) => {};
