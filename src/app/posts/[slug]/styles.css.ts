import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '20px 0px',
});

export const articleStyle = style({
  width: 768,
});

export const headingStyle = style({
  scrollMarginTop: 84,
});

export const heading1Style = style({
  marginBottom: '0.8888889em',
});

export const heading2Style = style({
  margin: '1.0em 0 0.6em 0',
});

export const heading3Style = style({
  margin: '0.6em 0 0.4em 0',
});

export const heading4Style = style({
  margin: '0.6em 0 0.35em 0',
});

export const paragraphStyle = style({
  margin: '1.5em 0',
  wordBreak: 'break-word',
});

export const anchorStyle = style({
  marginBottom: '1.5em',
});

export const listItemStyle = style({
  ':before': {
    display: 'none',
  },
});
