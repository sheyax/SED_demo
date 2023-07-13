import { Input } from "postcss";
import { motion } from "framer-motion";

export default function Registration() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col items-center justify-center "
    >
      <h3 className="font-semibold text-4xl uppercase tracking-[3px] mt-10">
        {" "}
        Register Here{" "}
      </h3>

      <div className="mt-5 space-y-2 grid xl:grid-cols-2 xl:space-x-2 ">
        <input
          type="text"
          placeholder="First Name"
          className="w-[300px] p-2 text-gray-700"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-[300px] p-2 text-gray-700"
        />

        <input
          type="email"
          placeholder="Your email @"
          className="w-[300px] p-2 text-gray-700"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-[300px] p-2 text-gray-700"
        />
      </div>

      <button
        className="bg-green-700 text-white uppercase tracking-[3px] p-2 mt-2 w-[300px]
      hover:scale-95 transition duration-200 ease-in-out"
      >
        {" "}
        Register
      </button>
    </motion.div>
  );
}
