import React from 'react';
import LoaderStyles from './index.module.scss';
export default function Loader({
  containerStyles,
  mainStyles,
}: {
  containerStyles?: React.CSSProperties;
  mainStyles?: React.CSSProperties;
}) {
  return (
    <div style={containerStyles} className={LoaderStyles.container}>
      <div style={mainStyles} className={LoaderStyles.container__loader} />
    </div>
  );
}
