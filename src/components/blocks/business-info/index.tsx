import Input from "@/components/base-ui/input";
import Button from "@/components/base-ui/button";

const styles = {
  base: "w-full flex items-center justify-center flex-col bg-[rgb(234 240 246)] ",
  title: "text-3xl font-semibold mb-4",
};

export default function BussinessInfo() {
  return (
    <div className={styles.base}>
      <div className='w-1/2 m-auto mt-[100px]'>
        <p className={styles.title}>What Is Your Business About?</p>
        <p className='mb-16'>
          To get started, please provide your industry and slogan:
        </p>
        <form>
          <Input
            type='text'
            placeholder='Name of your business'
            label='Name of your business*'
            size='full'
            className='mb-10'
            variant='regular'
          />
          <Input
            type='text'
            placeholder='Industry'
            label='Industry*'
            size='full'
            className='mb-10'
          />
          <Input
            type='text'
            placeholder='Slogan'
            label='Slogan (optional)'
            size='full'
          />
        </form>
      </div>
    </div>
  );
}
