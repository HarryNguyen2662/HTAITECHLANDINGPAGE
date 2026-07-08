export const FeatureCard = (props: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="group border-t-2 border-line pt-6 transition-colors duration-300 hover:border-primary">
    <div className="[&_svg]:stroke-graphite flex size-12 items-center justify-center rounded border border-line bg-secondary p-2.5 [&_svg]:size-full">
      {props.icon}
    </div>

    <div className="mt-5 font-display text-xl font-semibold text-foreground">
      {props.title}
    </div>

    <div className="mt-2 text-base leading-relaxed text-muted-foreground">
      {props.children}
    </div>
  </div>
);
