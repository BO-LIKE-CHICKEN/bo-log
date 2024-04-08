import { createGlobalTheme } from '@vanilla-extract/css';

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
