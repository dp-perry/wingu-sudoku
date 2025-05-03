type ControlButtonProps = {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}
export const ControlButton = (
  {onClick, disabled, children}: ControlButtonProps
) => {
  const className = [
    'aspect-square h-auto text-2xl font-bold ',
    'inline-flex items-center justify-center',
    'rounded-md shadow',
    `transition-colors ${disabled ? 'bg-gray-50 pointer-events-none' : 'bg-stone-200 cursor-pointer'}`,
  ];
  return (
    <button
      onClick={onClick}
      className={className.join(' ')}
    >
      {children}
    </button>
  );
};