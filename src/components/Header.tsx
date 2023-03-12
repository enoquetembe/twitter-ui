import { Sparkle } from "phosphor-react";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-8 py-5 text-xl font-bold border-b border-twitter-black-secondary">
      {title}
      <Sparkle className="w-8 h-8 text-twitter-blue" />
    </header>
  );
}
