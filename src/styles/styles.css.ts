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
});

globalStyle('a', {
  fontSize: '1em',
  lineHeight: 1.2,
  color: 'inherit',
  textDecoration: 'none',
  marginBottom: '1.5em',
});

globalStyle('h1', {
  lineHeight: 1.2,
  fontSize: '2.25em',
  marginBottom: '0.8888889em',
});

globalStyle('h2, h3, h4, h5, h6', {
  lineHeight: 1.2,
  fontSize: '1.5em',
  margin: '1em 0',
});

globalStyle('p', {
  lineHeight: 1.2,
  fontSize: '1rem',
  margin: '1.5em 0',
});

globalStyle('pre', {
  borderRadius: '0.5em',
  padding: '1.5em',
});

// For nested selectors like pre.shiki .line, you need to use global selectors
globalStyle('pre.shiki .line', {
  lineHeight: '22px',
  // ...additional styling
});

globalStyle('li', {
  listStylePosition: 'inside',
});
