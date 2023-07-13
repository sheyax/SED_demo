import { motion } from "framer-motion";
export default function Header() {
  return (
    <header
      className="sticky top-0 flex items-start justify-between mx-auto z-20
    xl:items-center p-5"
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1 }}
      >
        <h3>Logo</h3>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1 }}
      >
        <ul className=" flex items-center text-gray-600 cursor-pointer space-x-10">
          <li>Home</li>
          <li> About </li>
          <li> Contact</li>
        </ul>
      </motion.div>
    </header>
  );
}
