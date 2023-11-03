import { ONBOARDING_STEP_ENUM } from "@/utils/contants";
import { create } from "zustand";
import {
  combine,
  devtools,
  persist,
  createJSONStorage,
} from "zustand/middleware";

type OnboardingStateType = {
  businessInfo: {
    name: string;
    industry: string;
    slogan?: string;
  };
  selectedIcon: string;
  selectedFont: string;
  selectedColor: string;
  currentStep: number;
  stepsFinished: Record<number, boolean>;
};

const OnboardingInitialState: OnboardingStateType = {
  businessInfo: {
    name: "",
    industry: "",
    slogan: "",
  },
  selectedIcon: "",
  selectedFont: "",
  selectedColor: "",
  currentStep: 0,
  stepsFinished: {},
};

export const useOnboardingStore = create(
  devtools(
    persist(
      combine(OnboardingInitialState, (set, get) => ({
        addBusinessInfo: (businessInfo: OnboardingStateType["businessInfo"]) =>
          set({ businessInfo }),
        addIcon: (selectedIcon: string) => set({ selectedIcon }),
        addFont: (selectedFont: string) => set({ selectedFont }),
        addColor: (selectedColor: string) => set({ selectedColor }),
        setCurrentStep: (currentStep: number) => set({ currentStep }),
        setStepsFinished: (step: ONBOARDING_STEP_ENUM, value: boolean) =>
          set({
            stepsFinished: {
              ...get().stepsFinished,
              [step]: value,
            },
          }),
        clearAuth: () => set(OnboardingInitialState),
      })),
      {
        name: "onboarding-store",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
