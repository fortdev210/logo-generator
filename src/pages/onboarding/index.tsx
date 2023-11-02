import { useState } from "react";
import Button from "@/components/base-ui/button";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import PickIndustry from "@/components/blocks/onboarding/pick-industry";
import PickLogo from "@/components/blocks/onboarding/pick-logo";

export default function Onboarding() {
  const [step, setStep] = useState(0);

  return (
    <div className='w-full h-full'>
      <Header currentStep={step} onBack={() => setStep((step) => step - 1)} />
      <div className='w-full flex items-center justify-center'>
        {step === 0 ? (
          <PickIndustry onContinue={() => setStep((step) => step + 1)} />
        ) : (
          <PickLogo />
        )}
      </div>
    </div>
  );
}
