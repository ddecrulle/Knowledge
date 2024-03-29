import { createTheme } from '@mui/material/styles';

const primary = '#b3294e';
const secondary = '#0f417a';
const black = '#343a40';
const darkBlack = 'rgb(36, 40, 44)';
const background = '#f5f5f5';
const warningLight = 'rgba(253, 200, 69, .3)';
const warningMain = 'rgba(253, 200, 69, .5)';
const warningDark = 'rgba(253, 200, 69, .7)';

// border
const borderWidth = 2;
const borderColor = 'rgba(0, 0, 0, 0.13)';

// spacing
const spacing = 1;

const theme = createTheme({
  palette: {
    primary: { main: primary },
    secondary: { main: secondary },
    common: {
      black,
      darkBlack,
    },
    warning: {
      light: warningLight,
      main: warningMain,
      dark: warningDark,
    },
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    background: {
      default: background,
      bleu: secondary,
    },
    spacing,
  },
  border: {
    borderColor: borderColor,
    borderWidth: borderWidth,
  },
  overrides: {
    MuiExpansionPanel: {
      root: {
        position: 'static',
      },
    },
    MuiTableCell: {
      root: {
        paddingLeft: spacing * 2,
        paddingRight: spacing * 2,
        borderBottom: `${borderWidth}px solid ${borderColor}`,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: borderColor,
        height: borderWidth,
      },
    },
    MuiPrivateNotchedOutline: {
      root: {
        borderWidth: borderWidth,
      },
    },
    MuiListItem: {
      divider: {
        borderBottom: `${borderWidth}px solid ${borderColor}`,
      },
    },
    MuiDialog: {
      paper: {
        width: '100%',
        maxWidth: 430,
        marginLeft: spacing,
        marginRight: spacing,
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: darkBlack,
      },
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: ['Raleway', '"Helvetica"', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontFamily: ['Rubik', '"Helvetica"', 'Arial', 'sans-serif'].join(','),
    },
    h2: {
      fontFamily: ['Rubik', '"Helvetica"', 'Arial', 'sans-serif'].join(','),
    },
    h3: {
      fontFamily: ['Rubik', '"Helvetica"', 'Arial', 'sans-serif'].join(','),
    },
    h4: {
      fontFamily: ['Rubik', '"Helvetica"', 'Arial', 'sans-serif'].join(','),
    },
  },
});

export default theme;
