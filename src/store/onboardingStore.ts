import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

type OnboardingStateType = {
  businessInfo: {
    name: string;
    industry: string;
    slogan?: string;
  };
  icon: string;
  font: string;
  color: string;
};

const OnboardingInitialState: OnboardingStateType = {
  businessInfo: {
    name: "",
    industry: "",
    slogan: "",
  },
  icon: "",
  font: "",
  color: "",
};

export const useOnboardingStore = create(
  devtools(
    combine(OnboardingInitialState, (set) => ({
      setBusinessInfo: (businessInfo: OnboardingStateType["businessInfo"]) =>
        set({ businessInfo }),
      setIcon: (icon: string) => set({ icon }),
      setFont: (font: string) => set({ font }),
      setColor: (color: string) => set({ color }),
      clearAuth: () => set(OnboardingInitialState),
    }))
  )
);
