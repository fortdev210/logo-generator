import Image from "next/image";
import clsx from "clsx";

interface LogoCardProps {
  logo: string;
  className?: string;
}

const styles = {
  card: "shadow-sm rounded overflow-hidden",
};

export default function LogoCard(props: LogoCardProps) {
  const { logo, className } = props;

  return (
    <div className={clsx(styles.card, className)}>
      <Image
        src={logo}
        alt='logo'
        width={343}
        height={260}
        layout='responsive'
      />
    </div>
  );
}
