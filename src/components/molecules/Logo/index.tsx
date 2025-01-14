import { Avatar, Heading } from "@/components/atoms";

export const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <Avatar src="/images/profile.jpg" alt="profile avatar" />
      <Heading level={3}>JorgeDev</Heading>
    </div>
  );
};
