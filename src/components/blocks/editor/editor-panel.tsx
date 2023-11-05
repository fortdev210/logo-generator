import Button from "@/components/base-ui/button";
import MaterialIcon from "@/components/icons/material-icon";
import clsx from "clsx";
import React, { useState } from "react";

import ColorSelect from "./color-select";
import FontSelect from "./font-select";
import IconSelect from "./icon-select";

interface EditorPanelProps {
  /**
   * Classname
   */
  className?: string;
}

const styles = {
  base: "rounded-lg bg-white border border-gray w-full  p-3 h-fit h-fit flex flex-col ",
};

export default function EditorPanel({ className }: EditorPanelProps) {
  const [editingItem, setEditingItem] = useState<
    "icon" | "color" | "font" | "layout"
  >("icon");

  return (
    <div className={clsx(styles.base, className)}>
      <div className='flex justify-between items-center '>
        <div className='flex gap-2 items-center w-1/2'>
          <Button
            variant='secondary'
            icon={<MaterialIcon name='star_border_purple500' />}
            onClick={() => setEditingItem("icon")}
          >
            Icon
          </Button>
          <Button
            variant='secondary'
            icon={<MaterialIcon name='format_color_fill' />}
            onClick={() => setEditingItem("color")}
          >
            Color
          </Button>
          <Button
            variant='secondary'
            icon={<MaterialIcon name='text_format' />}
            onClick={() => setEditingItem("font")}
          >
            Fonts
          </Button>
          <Button
            variant='secondary'
            icon={<MaterialIcon name='auto_awesome_mosaic' type='outlined' />}
            onClick={() => setEditingItem("layout")}
          >
            Layout
          </Button>
        </div>
        <div className='flex gap-2 items-center w-fit'>
          <Button variant='secondary' icon={<MaterialIcon name='undo' />}>
            Undo
          </Button>
          <Button
            variant='secondary'
            icon={<MaterialIcon name='cancel' type='outlined' />}
          >
            Reset
          </Button>
        </div>
      </div>
      <div className='flex justify-between mt-3 h-[650px] py-3 '>
        {editingItem === "icon" && <IconSelect />}
        {editingItem === "color" && <ColorSelect />}
        {editingItem === "font" && <FontSelect />}
      </div>
    </div>
  );
}
