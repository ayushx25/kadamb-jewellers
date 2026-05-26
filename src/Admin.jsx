import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export default function Admin() {
  const [gold24, setGold24] = useState('');
  const [gold22, setGold22] = useState('');
  const [silver, setSilver] = useState('');

const updatePrices = async () => {
  try {
    await setDoc(doc(db, 'prices', 'dailyRates'), {
      gold24K: gold24,
      gold22K: gold22,
      silver: silver,
      updatedAt: new Date().toLocaleString(),
    });

    alert('Prices Updated Successfully');
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

  return (
    <div className="min-h-screen bg-stone-100 p-10">
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 shadow-2xl">
        <h1 className="mb-8 text-4xl font-bold">
          Admin Panel
        </h1>

        <div className="space-y-5">
          <input
            type="text"
            placeholder="24K Gold Price"
            value={gold24}
            onChange={(e) => setGold24(e.target.value)}
            className="w-full rounded-xl border p-4"
          />

          <input
            type="text"
            placeholder="22K Gold Price"
            value={gold22}
            onChange={(e) => setGold22(e.target.value)}
            className="w-full rounded-xl border p-4"
          />

          <input
            type="text"
            placeholder="Silver Price"
            value={silver}
            onChange={(e) => setSilver(e.target.value)}
            className="w-full rounded-xl border p-4"
          />

          <button onClick={updatePrices}>
  Update Prices
</button>
        </div>
      </div>
    </div>
  );
}