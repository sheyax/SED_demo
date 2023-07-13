import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="h-screen flex flex-col items-center justify-center overflow-scroll">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col text-center"
      >
        <h3 className="text-2xl tracking-[3px] font-semibold uppercase mt-10">
          About Us
        </h3>
        <p className="text-gray-500">Learn more about SED</p>
      </motion.div>
      <div className=" flex flex-col space-y-2 xl:space-x-2 xl:flex-row items-center xl:items-start xl:mx-10 xl:p-5">
        <img
          src="https://plus.unsplash.com/premium_photo-1679138594705-ab1a11dc2c83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VzdGFpbmFibGUlMjBlbmVyZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          className="object-cover h-2/5 xl:w-2/5 xl:h-3/5 mt-2"
          alt=""
        />

        <p className="text-sm text-gray-700 w-5/6">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
    </div>
  );
}
