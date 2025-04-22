"use client";
import useIsMobile from "@/hooks/useIsMobile";
import CustomCursor from "@/src/components/CustomCursor";

const ClientCustomCursor = () => {
  const isMobile = useIsMobile();

  if (isMobile === undefined || isMobile) return null;

  return <CustomCursor />;
};

export default ClientCustomCursor;
