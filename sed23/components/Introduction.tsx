import { motion } from "framer-motion";
export default function Introduction() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col items-center xl:justify-evenly md:text-left md:flex-row 
    max-w-7xl px-10 mx-auto xl:space-x-5"
    >
      <div>
        {/* Title */}
        <h3 className=" my-20 xl:mt-2 uppercase tracking-[3px] text-2xl xl:text-4xl">
          Sustainable energy days 2023
        </h3>
      </div>
      <div>
        {/* Description text */}
        <p className="text-sm">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </motion.div>
  );
}
