import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '20px 0px',
});

export const innerContainerStyle = style({
  width: 768,
});

export const splineContainerStyle = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
