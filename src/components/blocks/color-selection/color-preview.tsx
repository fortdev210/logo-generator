import clsx from "clsx";
import { Typography } from "@/components/base-ui/typography";

const styles = {
  base: "",
  preview: "",
};

export default function ColorPreview() {
  return (
    <div className={clsx(styles.base)}>
      <Typography variant='caption' text='PREVIEW' className='mb-4' />
    </div>
  );
}
