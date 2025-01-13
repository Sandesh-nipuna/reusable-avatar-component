import AvatarComponent from "@/components/avatarComponent";

export default function Home() {
  const users = [
    "/images/user1.png",
    "/images/user2.png",
    "/images/user3.png",
    "/images/user4.png",
    "/images/user5.png",
    "/images/user6.png",
    "/images/user7.png",
  ];

  const sizes: any = ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"];

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="max-w-full min-h-20 flex gap-4">
        {users.map((item, index) => {
          return (
            <AvatarComponent
              content={item}
              onlineIndicator={true}
              key={item}
              size={sizes[index]}
            />
          );
        })}
      </div>

      <div className="max-w-full min-h-20 flex gap-4">
        {users.map((item, index) => {
          return (
            <AvatarComponent
              content={item}
              // onlineIndicator={true}
              key={item}
              border={true}
              size={sizes[index]}
            />
          );
        })}
      </div>

      <div className="max-w-full min-h-20 flex gap-4">
        {users.map((item, index) => {
          return (
            <AvatarComponent
              content={+index + 1}
              onlineIndicator={true}
              key={item}
              size={sizes[index]}
            />
          );
        })}
      </div>

      <div className="max-w-full min-h-20 flex gap-4">
        {sizes.map((item: any) => {
          return (
            <AvatarComponent
              onlineIndicator={true}
              key={Math.random()}
              border={true}
              size={item}
            />
          );
        })}
      </div>
    </div>
  );
}
