import Image from "next/image";
import React from "react";
import UserIcon from "../../public/svg/userIcon";
import { avatar, indicator, textSize } from "@/helpers/tailwind-variants";

interface AvatarComponentProps {
  content?: string | number;
  onlineIndicator?: boolean;
  notificationNumber?: number;
  border?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
}

const AvatarComponent: React.FC<AvatarComponentProps> = ({
  content,
  onlineIndicator = false,
  size = "md",
  border = false,
}) => {
  return (
    <div className="relative">
      <div className={avatar({ size, border })}>
        {content ? (
          typeof content === "string" ? (
            <Image
              src={content}
              alt="userImage"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          ) : (
            <div className={textSize({ size })}>+{content}</div>
          )
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <UserIcon />
          </div>
        )}
      </div>
      {onlineIndicator && <div className={indicator({ size })} />}
    </div>
  );
};

export default AvatarComponent;
