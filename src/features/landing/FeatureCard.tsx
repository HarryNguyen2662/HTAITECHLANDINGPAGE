export const FeatureCard = (props: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg">
    {/* Icon container with enhanced gradient and animation */}
    <div className="size-14 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-3 shadow-md transition-transform duration-300 group-hover:scale-110 [&_svg]:stroke-white [&_svg]:stroke-2">
      {props.icon}
    </div>

    {/* Title with improved typography */}
    <div className="mt-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      {props.title}
    </div>

    {/* Decorative line with animation */}
    <div className="my-4 h-0.5 w-12 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-16" />

    {/* Content with better readability */}
    <div className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
      {props.children}
    </div>
  </div>
)