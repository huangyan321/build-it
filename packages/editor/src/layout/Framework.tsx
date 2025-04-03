import type { PropsWithChildren, ReactNode } from 'react';
import sty from '../styles/framework.module.scss';

export default function Framework({
  children: workspace,
  header,
  sidebar,
  propsPanel,
}: {
  children: ReactNode;
  header: ReactNode;
  sidebar: ReactNode;
  propsPanel: ReactNode;
} & PropsWithChildren) {
  return (
    <div className={sty.wrapper}>
      <div className={sty.nav}>{header}</div>
      <div className={sty.content}>
        <div className={sty.content__left}>{sidebar}</div>
        <div className={sty.content__center}>{workspace}</div>
        <div className={sty.content__right}>{propsPanel}</div>
      </div>
    </div>
  );
}
