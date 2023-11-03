import { Typography } from "@/components/base-ui/typography";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useOnboardingStore } from "@/store/onboardingStore";

const inter = Inter({ subsets: ["latin"] });

const styles = {
  base: "flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} bg-[url('https://www.hubspot.com/hubfs/brand-kit-generator/section-1.webp')]",
  input:
    "border text-xl px-4 border-solid border-gray-400 h-16 max-w-[500px] flex-1 rounded-l-lg",
  button: "h-16 bg-[#ff5c35] rounded-r-lg text-white px-4 hover:bg-[#ff7b5c]",
  title: "text-5xl font-bold text-white text-center mb-10",
  description: "text-2xl text-white text-center mb-10",
};

export default function Home() {
  const router = useRouter();
  const { addBusinessInfo, businessInfo } = useOnboardingStore();

  const onStart = () => {
    if (!businessInfo.name) {
      return;
    }
    router.push("/info");
  };

  return (
    <main className={styles.base}>
      <div className='m-auto w-1/2 flex flex-col items-center justify-center'>
        <Typography
          className={styles.title}
          variant='h1'
          text=' Free Logo Creator & Brand Identity Design'
        />
        <Typography
          variant='cta'
          text='Create custom logos, icons, and color palettes in an instant to build
          a unique online presence for your business'
          className='mb-10 text-center text-white'
        />
        <div className='flex items-center justify-center w-full'>
          <input
            type='text'
            placeholder='Your business name'
            className={styles.input}
            value={businessInfo.name}
            name='name'
            onChange={(e) =>
              addBusinessInfo({ ...businessInfo, name: e.target.value })
            }
          />
          <button className={styles.button} onClick={onStart}>
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
