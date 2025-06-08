import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const branches = [
  {
    name: "Katpadi",
    address: "No 1, Katpadi Road, Near Bus Stand, Vellore - 632007",
  },
  {
    name: "Arani",
    address: "No 15, Gandhi Street, Near Clock Tower, Arani - 632301",
  },
];

// Location dataset of surrounding areas
const locationDataset = {
  katpadi: [
    "pudur", "velluru", "vellore", "ramapuram", "pallikonda",
    "arcot", "walajapet", "gudiyattam", "odugathur", "arani",
    "kalavai", "palmaner", "ambur", "dharapadavedu", "kalinjur",
    "kangeyanallur", "thiruvalam", "gandhinagar", "senur", "virudampattu",
    "alanganeri", "arumbakkam", "brahmapuram", "chenji", "cholamur",
    "erukkambattu", "gollapalli", "jaffrapet", "kalambattu", "kandipedu",
    "otteri", "sathuvachari", "thorapadi", "bagayam", "vannankulam"
  ],
  arani: [
    "kalavai", "peranamallur", "polur", "arcot", "walajapet",
    "vellore", "desur", "velluru", "katpadi", "pudur", "vandavasi",
    "odugathur", "dusi", "pennathur", "pallikonda", "arani", "sevur",
    "devikapuram", "paiyur", "kannamangalam", "sathiyavijayanagaram",
    "mullipattu", "adaiayapulam", "adanur", "agaram", "ariyapadi",
    "athimalaipattu", "irumbedu", "kalpoondi", "kunnathur",
    "morappanthangal", "murugamangalam", "nachapuram", "nesal",
    "ogaiyur", "palayam", "panaiyur"
  ]
};

const findNearestBranch = (location) => {
  const keyword = location.toLowerCase().trim();

  if (locationDataset.katpadi.some(k => keyword.includes(k))) return branches[0];
  if (locationDataset.arani.some(k => keyword.includes(k))) return branches[1];

  return null;
};

const Showroom = () => {
  const [userLocation, setUserLocation] = useState('');
  const [nearestBranch, setNearestBranch] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = findNearestBranch(userLocation);
    setNearestBranch(found);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Find Your Nearest Dass Computer Store
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <input
          type="text"
          placeholder="Enter your town/village (e.g. Vannankulam)"
          value={userLocation}
          onChange={(e) => setUserLocation(e.target.value)}
          className="border p-3 rounded-lg w-full sm:w-2/3"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </motion.form>

      <AnimatePresence>
        {nearestBranch ? (
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-xl text-center border border-blue-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
          >
            <h2 className="text-2xl font-semibold mb-2 text-green-600">Nearest Store Found 🎉</h2>
            <p className="text-xl font-medium">{nearestBranch.name} Branch</p>
            <p className="text-gray-700 mt-1">{nearestBranch.address}</p>
          </motion.div>
        ) : userLocation && (
          <motion.div
            className="text-center text-red-500 font-medium mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ❌ Sorry, we couldn't find a nearby store for "{userLocation}".
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="mt-12 grid sm:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {branches.map((branch, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-5 rounded-xl shadow-md border hover:shadow-xl transition"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-bold mb-2">{branch.name} Branch</h3>
            <p>{branch.address}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Showroom;
