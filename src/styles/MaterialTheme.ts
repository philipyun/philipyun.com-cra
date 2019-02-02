import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import teal from '@material-ui/core/colors/teal';

export default createMuiTheme({
    palette: {
        primary: blueGrey,
        secondary: teal,
    },
    typography: {
        useNextVariants: true,
    },
});
