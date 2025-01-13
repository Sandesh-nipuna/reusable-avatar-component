import { tv } from "tailwind-variants";

export const avatar = tv({
  base: "flex items-center justify-center font-medium bg-[#EDEDF3] text-white rounded-full overflow-hidden relative",
  variants: {
    size: {
      xs: "h-[16px] w-[16px]",
      sm: "h-[24px] w-[24px]",
      md: "h-[32px] w-[32px]",
      lg: "h-[36px] w-[36px]",
      xl: "h-[40px] w-[40px]",
      xxl: "h-[48px] w-[48px]",
      xxxl: "h-[64px] w-[64px]",
    },
    border: {
      true: "border-[#FBFBFB] border-[2px]",
    },
  },
  compoundVariants: [
    {
      size: "xs",
      class: "border-[1.5px]",
    },
  ],
  defaultVariants: {
    size: "md",
  },
});

export const indicator = tv({
  base: "absolute bg-[#17B26A] border-[#FFFFFF] z-10 rounded-full",
  variants: {
    size: {
      xs: "w-[4px] h-[4px] top-[12px] left-[12px]",
      sm: "w-[6px] h-[6px] top-[18px] left-[18px]",
      md: "w-[8px] h-[8px] top-[21px] left-[26px]",
      lg: "w-[10px] h-[10px] top-[25px] left-[27px]",
      xl: "w-[12px] h-[12px] top-[27px] left-[31px]",
      xxl: "w-[12px] h-[12px] top-[33px] left-[38px]",
      xxxl: "w-[12px] h-[12px] top-[46px] left-[50px]",
    },
  },
  compoundVariants: [
    {
      size: "xs",
      class: "border-[1px]",
    },
    {
      size: ["sm", "md", "lg"],
      class: "border-[1.5px]",
    },
    {
      size: ["xl", "xxl", "xxxl"],
      class: "border-[2px]",
    },
  ],
  defaultVariants: {
    size: "md",
  },
});

export const textSize = tv({
  base: "text-[#344054] font-inter text-center font-medium",
  variants: {
    size: {
      xs: "text-[8px] leading-[12px]",
      sm: "text-[12px] leading-[18px]",
      md: "text-[12px] leading-[18px]",
      lg: "text-[14px] leading-[20px]",
      xl: "text-[16px] leading-[24px]",
      xxl: "text-[20px] leading-[30px]",
      xxxl: "text-[24px] leading-[32px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
