import { ReactNode } from 'react';

export const metadata = {
  title: 'Products',
};

const ProductLayout = ({ children }: { children: ReactNode }) => {
  return <div className='py-10 px-10'>{children}</div>;
};

export default ProductLayout;
