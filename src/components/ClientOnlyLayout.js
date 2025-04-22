"use client";

import dynamic from "next/dynamic";
import CustomCursor from "@/components/CustomCursor";

// 👇 This will prevent SSR of the ContactUs component entirely
const ContactUs = dynamic(() => import("@/components/ContactUs"), {
  ssr: false,
});

export default function ClientOnlyLayout({ children }) {
  return (
    <>
      <CustomCursor />
      {children}
      <ContactUs />
    </>
  );
}
