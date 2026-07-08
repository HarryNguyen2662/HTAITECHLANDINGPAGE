export const CTABanner = (props: {
  title: string;
  description: string;
  buttons: React.ReactNode;
}) => (
  <div className="mx-auto max-w-2xl px-6 py-10 text-center">
    <div className="text-paper font-display text-3xl font-semibold sm:text-4xl">
      {props.title}
    </div>

    <div className="text-paper/70 mt-4 text-lg">
      {props.description}
    </div>

    <div className="mt-8">{props.buttons}</div>
  </div>
);
