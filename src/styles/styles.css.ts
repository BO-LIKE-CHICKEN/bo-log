import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

export const globalColors = createGlobalTheme(':root', {
  colors: {
    blueGreyDarken1: '#263238',
    blueGreyDarken1Opacity: '#263238E6',
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
  height: '100vh',
  minHeight: '100vh',
  overflowX: 'hidden',
  backgroundColor: globalColors.colors.blueGreyDarken1,
});

globalStyle('main', {
  height: '100%',
  paddingTop: 64,
});

globalStyle('a', {
  fontSize: '1em',
  lineHeight: 1.4,
  textDecoration: 'none',
  color: globalColors.colors.blueGreyLighten2,
  transition: 'color 0.3s',
});

globalStyle('a:hover', {
  color: globalColors.colors.blueGrey,
});

globalStyle('h1', {
  lineHeight: 1.4,
  fontSize: '2.25em',
  color: globalColors.colors.blueGreyLighten5,
});

globalStyle('h2', {
  lineHeight: 1.4,
  fontSize: '1.5em',

  color: globalColors.colors.blueGreyLighten5,
});

globalStyle('h3', {
  lineHeight: 1.4,

  fontSize: '1.25em',
  color: globalColors.colors.blueGreyLighten5,
});

globalStyle('h4', {
  lineHeight: 1.4,

  fontSize: '1.0em',
  color: globalColors.colors.blueGreyLighten5,
});

globalStyle('p', {
  lineHeight: 1.4,
  fontSize: '1rem',
  color: globalColors.colors.blueGreyLighten4,
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
  lineHeight: 1.4,
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
