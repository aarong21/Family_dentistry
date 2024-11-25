import React from 'react';
import { motion } from 'framer-motion';


// using a library like Framer Motion for more advanced animations.
const Home = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h1>Welcome to Our Dental Clinic</h1>
  </motion.div>
);

export default Home;
