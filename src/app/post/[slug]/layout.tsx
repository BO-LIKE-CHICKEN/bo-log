import React from 'react';
import { containerStyle } from './styles.css';

type Props = Readonly<{
  children: React.ReactNode;
}>;

function PageLayout({ children }: Props) {
  return <section className={containerStyle}>{children}</section>;
}

export default PageLayout;
