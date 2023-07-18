import Link from "next/link";
import Typewrite from "./Typewrite";
import AIbanner from "../public/Hackaton.jpg";

type Props = {};

export default function Banner({}: Props) {
  return (
    <div
      className=" flex flex-col xl:grid xl:grid-cols-5
    items-center justify-center mt-20  xl:h-screen
    "
    >
      {/* <h3 className="font-bold text-4xl m-auto animate-pulse"> SED23 Banner</h3> */}
      <div
        className="xl:col-span-2 flex flex-col items-center  w-full
      justify-center space-y-5 text-white bg-green-950 xl:h-screen h-[400px] "
      >
        <h1 className="uppercase mt-10 xl:mt-0 xl:text-left text-3xl text-center tracking-[3px] font-semibold xl:text-7xl xl:mx-5">
          {" "}
          Sustainable energy days 2023
        </h1>
        <Typewrite />

        <button
          className="p-2 cursor-pointer bg-yellow-600
         hover:text-white rounded-full border border-white w-[150px]"
        >
          <Link href="#register">
            <p>Register</p>
          </Link>
        </button>
      </div>

      <div className="col-span-3">
        <img
          src={AIbanner}
          alt=""
          className="object-cover w-full xl:h-screen "
        />
      </div>
    </div>
  );
}
