import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "./firebase";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  const [gold24k, setGold24k] = useState("");
  const [gold22k, setGold22k] = useState("");
  const [silver, setSilver] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoggedIn(true);
      alert("Login Successful");
    } catch (error) {
      alert("Wrong Email or Password");
    }
  };

  const updatePrices = async () => {
    try {
      await setDoc(doc(db, "prices", "dailyRates"), {
        gold24k,
        gold22k,
        silver,
      });

      alert("Prices Updated");
    } catch (error) {
      console.log(error);
      alert("Error updating prices");
    }
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-100">
        <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Admin Login
          </h1>

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-4 rounded-xl mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-4 rounded-xl mb-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={login}
            className="w-full bg-black text-white py-4 rounded-xl"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-100 p-10">
      <div className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-bold mb-8">
          Update Gold & Silver Prices
        </h1>

        <input
          type="text"
          placeholder="24K Gold Price"
          value={gold24k}
          onChange={(e) => setGold24k(e.target.value)}
          className="w-full border p-4 rounded-xl mb-4"
        />

        <input
          type="text"
          placeholder="22K Gold Price"
          value={gold22k}
          onChange={(e) => setGold22k(e.target.value)}
          className="w-full border p-4 rounded-xl mb-4"
        />

        <input
          type="text"
          placeholder="Silver Price"
          value={silver}
          onChange={(e) => setSilver(e.target.value)}
          className="w-full border p-4 rounded-xl mb-6"
        />

        <button
          onClick={updatePrices}
          className="w-full bg-yellow-500 py-4 rounded-xl font-bold"
        >
          Update Prices
        </button>
      </div>
    </div>
  );
}