import { useState } from 'react';
import Modal from './components/Modal';

// Fake data: Camping gear and their weights in grams
const CAMPING_GEAR = [
  { id: 1, name: 'Tent', weight: 3500 },
  { id: 2, name: 'Sleeping Bag', weight: 1200 },
  { id: 3, name: 'Camping Stove', weight: 800 }
];

export default function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [showGear, setShowGear] = useState(false);

  // 2. Reduce math: 
  // The function calculates the accumulating sum and the current item together. Initial value is 0.
  const totalWeight = CAMPING_GEAR.reduce((sum, item) => sum + item.weight, 0);

  return (
    <div className="p-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Camping Trip Summary</h2>

        <p className="text-xl font-black text-blue-600 mb-4">
          Backpack weight: {totalWeight} g
        </p>

        <button
          onClick={() => setShowGear(true)}
          className="bg-blue-600 text-white px-6 py-3 text-lg font-semibold rounded-xl shadow hover:bg-blue-500"
        >
          View equipment
        </button>
      </section>

      <section className="mt-10 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Modal Testing</h2>

        <div className="mb-4 flex gap-3">
          <button
            onClick={() => setShowInfo(true)}
            className="bg-blue-600 text-white px-6 py-3 text-lg font-semibold rounded-xl shadow hover:bg-blue-500"
          >
            Show Details
          </button>

          <button
            onClick={() => setShowMoreInfo(true)}
            className="bg-green-600 text-white px-6 py-3 text-lg font-semibold rounded-xl shadow hover:bg-green-500"
          >
            Show Details
          </button>
        </div>

      </section>

      <Modal isOpen={showInfo} onClose={() => setShowInfo(false)}>
        <h3 className="text-2xl font-bold mb-3">Details</h3>
        <p>This is content injected inside the modal!</p>
      </Modal>

      <Modal isOpen={showMoreInfo} onClose={() => setShowMoreInfo(false)}>
        <h3 className="text-2xl font-bold mb-3">More Details</h3>
        <p>Here is some other info inside this modal.</p>
      </Modal>

      <Modal isOpen={showGear} onClose={() => setShowGear(false)}>
        <h3 className="text-2xl font-bold mb-4">Packed Items</h3>
        <ul className="space-y-2">
          {CAMPING_GEAR.map((item) => (
            <li key={item.id} className="border-b pb-1 flex justify-between">
              <span>{item.name}</span>
              <span className="text-gray-500">{item.weight} g</span>
            </li>
          ))}
        </ul>
      </Modal>

    </div>
  );
}