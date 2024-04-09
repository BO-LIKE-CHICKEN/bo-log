import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

export const globalColors = createGlobalTheme(':root', {
  colors: {
    blueGreyDarken1: '#263238',
    blueGreyDarken2: '#37474F',
    blueGreyDarken3: '#455a64',
    blueGreyDarken4: '#546e7a',
    blueGrey: '#607d8b',
    blueGreyLighten1: '#78909c',
    blueGreyLighten2: '#90a4ae',
    blueGreyLighten3: '#b0bec5',
    blueGreyLighten4: '#cfd8dc',
    blueGreyLighten5: '#eceff1',
  },
});

// Define global styles
globalStyle('*', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
  fontFamily: [
    'pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ].join(','),
});

globalStyle('html, body', {
  maxWidth: '100vw',
  overflowX: 'hidden',
  backgroundColor: globalColors.colors.blueGreyDarken1,
});

globalStyle('a', {
  fontSize: '1em',
  lineHeight: 1.4,
  textDecoration: 'none',
  marginBottom: '1.5em',
  color: globalColors.colors.blueGreyLighten2,
});

globalStyle('h1', {
  lineHeight: 1.4,
  fontSize: '2.25em',
  marginBottom: '0.8888889em',
  color: globalColors.colors.blueGreyLighten5,
});

globalStyle('h2', {
  lineHeight: 1.4,
  fontSize: '1.5em',
  margin: '1.7em 0 1.0em 0',
  color: globalColors.colors.blueGreyLighten5,
});

globalStyle('h3', {
  lineHeight: 1.4,
  margin: '0.8em 0 0.5em 0',
  fontSize: '1.25em',
  color: globalColors.colors.blueGreyLighten5,
});

globalStyle('h4', {
  lineHeight: 1.4,
  margin: '0.6em 0 0.35em 0',
  fontSize: '1.0em',
  color: globalColors.colors.blueGreyLighten5,
});

globalStyle('p', {
  lineHeight: 1.4,
  fontSize: '1rem',
  margin: '1.5em 0',
  color: globalColors.colors.blueGreyLighten4,
  wordBreak: 'break-word',
});

globalStyle('pre', {
  borderRadius: '0.5em',
  padding: '1.5em',
});

globalStyle('pre.shiki .line', {
  lineHeight: '22px',
});

globalStyle('ol, ul', {
  paddingLeft: 20,
});

globalStyle('li', {
  fontSize: '1rem',
  color: globalColors.colors.blueGreyLighten4,
  padding: '3px 2px',
});

globalStyle('code', {
  background: globalColors.colors.blueGreyLighten3,
  color: globalColors.colors.blueGreyDarken2,
  fontWeight: 700,
  padding: '0.05em 0.2em',
  borderRadius: '0.25em',
  margin: '0 0.1em',
});

globalStyle('pre.shiki code', {
  fontWeight: 'inherit',
  color: 'inherit',
  background: 'inherit',
});
