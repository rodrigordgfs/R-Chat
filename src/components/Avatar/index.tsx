interface AvatarProps {
  image: string;
}

export function Avatar({ image }: AvatarProps) {
  return (
    <div className="flex flex-row items-end">
      <img
        src={image ?? "https://i.imgur.com/0sluqzx.png"}
        className="h-14 w-14 rounded-full shadow-md"
      />
      <div className="h-3 w-3 -ml-3 bg-green-500 rounded-full" />
    </div>
  );
}
