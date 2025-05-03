type ActionButtonProps = {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}

export const ActionButton = (
  {onClick, disabled, children}: ActionButtonProps
) => {
  const className = [
    'aspect-square h-auto text-sm p-1',
    'flex flex-col items-center justify-center',
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