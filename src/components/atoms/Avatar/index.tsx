import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <div className="relative shrink-0 w-[52px] h-[52px] rounded-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={52}
        height={52}
        className="object-cover"
      />
    </div>
  );
};
