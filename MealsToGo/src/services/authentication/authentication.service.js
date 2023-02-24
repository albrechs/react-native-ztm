import { signInWithEmailAndPassword } from "firebase/auth";

export const authRequest = (auth, email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((u) => resolve(u))
      .catch((e) => reject(e));
  });
};

export const authTransform = ({ results = [] }) => {};
