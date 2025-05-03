import {ReactNode} from 'react';
type PaddingVariants = 'sm' | 'md' | 'lg';

type CardProps = {
  padding?: PaddingVariants;
  children: ReactNode
}

const paddingOptions: {[key in PaddingVariants] : string} = {
  sm: 'p-4',
  md: 'p-8',
  lg: 'p-12'
}

export const Card = (
  {padding = 'md', children}: CardProps
) => {
  const classNames = [
    'bg-white rounded-lg shadow border border-slate-200',
    paddingOptions[padding],
  ]
  return (
    <div className={classNames.join(' ')}>
      {children}
    </div>
  );
};