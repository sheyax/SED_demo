export default function BackgroundCircles() {
  return (
    <div className="relative flex justify-center items-center">
      <div
        className="border absolute border-green-600 rounded-full h-[600px] w-[600px]
      mt-[700px] xl:mt-[200px] xl:mx-[800px] animate-pulse"
      />
      <div
        className="border absolute border-green-300 rounded-full h-[200px] w-[200px]
      mt-[700px] xl:mt-[200px] xl:mx-[800px] animate-pulse"
      />
    </div>
  );
}
