import Image from "next/image";

const Card = ({ imgUrl }) => {
  return (
    <div className="flex flex-col md:flex-row my-10 px-4 md:px-20">
      <Image
        src={imgUrl}
        alt="pImg"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full md:w-full h-[85vh] object-cover"
      />
      {/* <div className="w-full md:w-1/2 bg-white p-6 flex flex-col justify-center items-start">
        {children}
      </div> */}
    </div>
  );
};

export default Card;
