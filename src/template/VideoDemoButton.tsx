import { FaYoutube } from 'react-icons/fa';

type VideoDemoButtonProps = {
  url: string;
  color?: 'purple' | 'blue';
};

export const VideoDemoButton = ({ url }: VideoDemoButtonProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-primary-foreground transition-colors hover:bg-primary/90"
    >
      <FaYoutube className="text-xl" />
      <span className="font-medium">Watch demo</span>
    </a>
  );
};
