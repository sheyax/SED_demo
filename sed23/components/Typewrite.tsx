import { Cursor, useTypewriter } from "react-simple-typewriter";
export default function Typewrite() {
  const [text, count] = useTypewriter({
    words: [
      "Powering Clean Energy",
      "Changing the world",
      "one step at a time",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <h1>
        <span className=" tracking-[3px] text-white-80 xl:text-left">
          {text}
        </span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}
