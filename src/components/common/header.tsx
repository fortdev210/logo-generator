import MaterialIcon from "@/components/icons/material-icon";

export default function Header() {
  return (
    <div className='w-full shadow h-16 bg-white flex items-center px-4 '>
      <div className='flex items-center m-auto '>
        <MaterialIcon name='generating_tokens' />
        <p className='ml-1 font-bold'>Logo Generator</p>
      </div>
      <MaterialIcon name='dehaze' />
    </div>
  );
}
