import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="footer flex flex-col md:flex-row justify-center items-center  gap-3 bg-black/75 h-30 md:h-16 md:text-lg">
        <p>SOS Construction Inc</p>
        <p className="">© 2025 All rights reserved </p>
        <Link href="/fr/policy" className=" hover:text-[#b5c89d] text-[#5c6642]">
          Privacy Policy
        </Link>
      </div>
    </>
  );
}
