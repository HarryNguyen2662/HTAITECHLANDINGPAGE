import { FaApple, FaGooglePlay } from 'react-icons/fa';

type AppStoreButtonProps = {
  url: string;
  platform: 'android' | 'ios' | 'macos';
  fullWidth?: boolean;
  theme?: 'purple' | 'blue';
};

const platformData = {
  android: { icon: <FaGooglePlay className="text-lg" />, text: 'Google Play' },
  ios: { icon: <FaApple className="text-lg" />, text: 'App Store' },
  macos: { icon: <FaApple className="text-lg" />, text: 'Mac App Store' },
};

export const AppStoreButton = ({ url, platform, fullWidth }: AppStoreButtonProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${fullWidth ? 'w-full' : ''} border-ink flex items-center justify-center gap-2 border px-6 py-3.5 text-foreground transition-colors hover:bg-secondary`}
    >
      {platformData[platform].icon}
      <span className="font-medium">
        {platformData[platform].text}
      </span>
    </a>
  );
};
