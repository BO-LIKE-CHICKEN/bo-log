import { style } from '@vanilla-extract/css';
import { globalColors } from '@/styles/styles.css';

export const containerStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  height: 64,
  borderBottom: `1px solid ${globalColors.colors.blueGrey}`,
  backgroundColor: globalColors.colors.blueGreyDarken1Opacity,
  padding: '0 40px',
});

export const logoStyle = style({
  display: 'flex',
  alignItems: 'center',
  margin: 0,
});

export const logoTextStyle = style({
  fontSize: 30,
});

export const navStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const navAnchorStyle = style({
  margin: 0,
});
