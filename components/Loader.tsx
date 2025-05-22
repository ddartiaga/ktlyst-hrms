import Image from "next/image";

const Loader = () => {
  return (
    <div id="loader">
      <Image
        width={100}
        height={100}
        src="/assets/images/media/loader.svg"
        alt="Loading..."
        priority
      />
    </div>
  );
};

export default Loader;
