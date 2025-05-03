type VariantProps = 'normal' | 'secondary' | 'delete'
type SizeProps = 'sm' | 'md' | 'lg' | 'xl'

type ButtonsProps = {
  variant?: VariantProps;
  size?: SizeProps;
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const buttonVariants = {
  normal: 'capitalize p-2 bg-sky-500/80 text-white text-center rounded-lg shadow cursor-pointer transition-colors hover:bg-sky-500',
  secondary: '',
  delete: '',
}
const buttonSizes = {
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
}

export const Button = (
  {variant = 'normal', size = 'md', type = 'button', onClick, children}: ButtonsProps
) => {
  const className = [
    buttonVariants[variant],
    buttonSizes[size],
  ]
  return (
    <button
      type={type}
      onClick={onClick}
      className={className.join(' ')}
    >
      {children}
    </button>
  );
};