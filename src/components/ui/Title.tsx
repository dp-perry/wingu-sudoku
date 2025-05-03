type TitleVariants = 'h1' | 'h2' | 'h3' | 'h4';
const variantClasses: {[key in TitleVariants] : string} = {
  h1: 'text-[48px] font-semibold text-sky-500 capitalize',
  h2: 'text-2xl font-semibold text-sky-500 capitalize',
  h3: 'text-xl font-semibold text-stone-700',
  h4: 'font-semibold text-stone-700'
}

export const Title = (
  {variant = 'h4', children}: { variant?: TitleVariants, children: React.ReactNode }
) => {
  return (
    <div className={`${variantClasses[variant]}`}>
      {children}
    </div>
  );
};