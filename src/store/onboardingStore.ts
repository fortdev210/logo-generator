import { ONBOARDING_STEP_ENUM } from "@/utils/contants";
import { create } from "zustand";
import {
  combine,
  createJSONStorage,
  devtools,
  persist,
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
  selectedLogo: string;
  selectedLayout: string;
  selectedBgColor: string;
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
  selectedBgColor: "",
  selectedLogo: "",
  selectedLayout: "",
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
        addLogo: (selectedLogo: string) => set({ selectedLogo }),
        addLayout: (selectedLayout: string) => set({ selectedLayout }),
        addBgColor: (selectedBgColor: string) => set({ selectedBgColor }),
        setCurrentStep: (currentStep: number) => set({ currentStep }),
        setStepsFinished: (step: ONBOARDING_STEP_ENUM, value: boolean) =>
          set({
            stepsFinished: {
              ...get().stepsFinished,
              [step]: value,
            },
          }),
        clearOnboarding: () => set(OnboardingInitialState),
      })),
      {
        name: "onboarding-store",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
