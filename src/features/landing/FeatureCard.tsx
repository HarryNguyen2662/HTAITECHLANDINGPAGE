export const FeatureCard = (props: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg">
    {/* Thêm độ mờ cho gradient và backdrop-blur */}
    <div className="size-20 rounded-lg bg-gradient-to-br from-sky-400/70 via-blue-500/70 to-blue-700/70 p-4 shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 [&_svg]:h-full [&_svg]:w-full [&_svg]:stroke-white [&_svg]:stroke-1.5">
      {props.icon}
    </div>

    <div className="mt-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      {props.title}
    </div>

    {/* Điều chỉnh độ mờ cho đường kẻ */}
    <div className="my-4 h-0.5 w-12 bg-gradient-to-r from-sky-400/60 to-blue-600/60 transition-all duration-300 group-hover:w-16" />

    <div className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
      {props.children}
    </div>
  </div>
)