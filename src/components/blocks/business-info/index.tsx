import Input from "@/components/base-ui/input";
import { Typography } from "@/components/base-ui/typography";
import { useOnboardingStore } from "@/store/onboardingStore";

const styles = {
  base: "w-full flex items-center justify-center flex-col bg-[rgb(234 240 246)] ",
  title: "text-3xl font-semibold mb-4",
};

export default function BussinessInfo() {
  const { addBusinessInfo, businessInfo } = useOnboardingStore();

  return (
    <div className={styles.base}>
      <div className='w-full p-10  md:w-1/2 m-auto mt-[100px]'>
        <Typography
          variant='h1'
          text='What Is Your Business About?'
          className='mb-4 hidden md:block'
        />
        <Typography
          variant='body1'
          text='To get started, please provide your industry and slogan:'
          className='mb-16'
        />
        <form>
          <Input
            type='text'
            placeholder='Name of your business'
            label='Name of your business*'
            size='full'
            className='mb-10'
            variant='regular'
            name='name'
            value={businessInfo.name}
            onChange={(e) =>
              addBusinessInfo({ ...businessInfo, name: e.target.value })
            }
          />
          <Input
            type='text'
            placeholder='Industry'
            label='Industry*'
            size='full'
            className='mb-10'
            value={businessInfo.industry}
            name='industry'
            onChange={(e) =>
              addBusinessInfo({ ...businessInfo, industry: e.target.value })
            }
          />
          <Input
            type='text'
            placeholder='Slogan'
            label='Slogan (optional)'
            size='full'
            name='slogan'
            value={businessInfo.slogan}
            onChange={(e) =>
              addBusinessInfo({ ...businessInfo, slogan: e.target.value })
            }
          />
        </form>
      </div>
    </div>
  );
}
