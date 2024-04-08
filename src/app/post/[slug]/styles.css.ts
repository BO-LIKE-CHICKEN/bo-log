import { style } from '@vanilla-extract/css';
import { globalColors } from '@/styles/styles.css';

export const containerStyle = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: globalColors.colors.blueGreyDarken1,
  padding: '20px 0px',
});

export const articleStyle = style({
  backgroundColor: globalColors.colors.blueGreyDarken1,
  width: 708,
});

export const headingStyle = style({
  color: globalColors.colors.blueGreyLighten5,
});

export const paragraphStyle = style({
  color: globalColors.colors.blueGreyLighten4,
});

export const anchorStyle = style({
  color: globalColors.colors.blueGreyLighten2,
});
