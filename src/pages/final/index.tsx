import React from "react";
import dynamic from "next/dynamic";

const FinalLogo = dynamic(() => import("@/components/blocks/final"), {
  ssr: false,
});

export default function Final() {
  return (
    <div>
      <FinalLogo />
    </div>
  );
}
