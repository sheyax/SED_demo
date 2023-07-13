import Member from "./Member";
import { motion } from "framer-motion";
export default function Team() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="h-screen flex relative items-center justify-center"
    >
      <h1 className="absolute top-24 uppercase text-2xl tracking-[3px]">
        Meet the team
      </h1>
      <div
        className="h-4/5 space-y-5 mt-[150px] overflow-scroll
       xl:grid xl:grid-cols-4 "
      >
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
      </div>
    </motion.div>
  );
}
