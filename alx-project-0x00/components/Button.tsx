import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  variant = "primary",
}) => {
  // Size classes
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-5 py-2 text-base",
    large: "px-7 py-3 text-lg font-semibold",
  };

  // Variant styles
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      className={`
        ${sizeClasses[size]}
        ${shape}
        ${variantClasses[variant]}
        transition-all duration-200
        font-medium
        whitespace-nowrap
      `}
    >
      {title}
    </button>
  );
};

export default Button;
