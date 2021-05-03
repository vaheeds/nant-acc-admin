import { createMuiTheme } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { jssPreset } from '@material-ui/core/styles';

export const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
export const theme = createMuiTheme({
  direction: 'rtl',
  palette: {
    secondary: {
      light: '#63ccff',
      main: '#039be5',
      dark: '#006db3',
      text: '#000000',
    },
    primary: {
      light: '#4f83cc',
      main: '#01579b',
      dark: '#002f6c',
      text: '#ffffff',
    },
  },
});
