import { Typography } from "@/components/base-ui/typography";
import clsx from "clsx";
import React from "react";
import EditorPanel from "./editor-panel";

const styles = {
  base: "w-full flex items-center justify-center flex-col bg-[#eaf0f6] pt-[100px] h-full ",
};

interface LogoEditorProps {
  /**
   * Classname
   */
  className?: string;
}

export default function LogoEditor({ className }: LogoEditorProps) {
  return (
    <div className={clsx(styles.base, className)}>
      <div className='max-w-[1200px] xl:max-w-[1000px] m-auto w-full px-2'>
        <Typography
          variant='h1'
          text='Customize Your Brand Kit'
          className='mb-4'
        />
        <Typography
          variant='body1'
          text='Change Layout, Fonts, Colors and Icons and save your logo into your Logo Collection.'
          className='mb-4'
        />
        <EditorPanel />
      </div>
    </div>
  );
}
