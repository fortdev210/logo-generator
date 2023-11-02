import MaterialIcon from "@/components/icons/material-icon";

interface HeaderProps {
  currentStep: number;
  onBack: () => void;
}

export default function Header(props: HeaderProps) {
  const { currentStep, onBack } = props;

  return (
    <div className='w-full shadow h-[70px] fixed top-0 bg-white flex items-center px-4 z-10 '>
      {currentStep ? (
        <MaterialIcon name='arrow_back' className='pointer' onClick={onBack} />
      ) : null}
      <div className='flex items-center m-auto '>
        <MaterialIcon name='generating_tokens' />
        <p className='ml-1 font-bold'>Logo Generator</p>
      </div>
      <MaterialIcon name='dehaze' />
    </div>
  );
}
