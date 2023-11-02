import Button from "@/components/base-ui/button";
import MaterialIcon from "@/components/icons/material-icon";
import Select from "react-select";
import { faker } from "@faker-js/faker";

interface Props {
  onContinue: () => void;
}

export default function PickColors(props: Props) {
  const { onContinue } = props;

  const options = Array.from({ length: 12 }, () => {
    const business = faker.commerce.department();

    return {
      label: business,
      value: business,
    };
  });

  return (
    <div className='w-full h-full flex flex-col mt-[70px]'>
      <div className='w-full '>
        <div className='w-10/12 flex items-center justify-between m-auto py-10'>
          <div>
            <h3 className='text-xl font-medium mb-1'>Pick your industry</h3>
            <p className='text-[rgb(103,110,139)] text-base font-medium'>
              Knowing your industry will help us pick symbols, colors and more.
            </p>
          </div>
          <Button variant='primary' size='large' onClick={onContinue}>
            Continue
            <MaterialIcon name='arrow_forward' />
          </Button>
        </div>
        <div className='w-10/12 m-auto'>
          <Select options={options} />
        </div>
      </div>
    </div>
  );
}
