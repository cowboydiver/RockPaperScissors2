export type playerType = "Player" | "AI";

interface AvatarProps {
  type: playerType;
}

export function Avatar({ type }: AvatarProps) {
  return <div></div>;
}
