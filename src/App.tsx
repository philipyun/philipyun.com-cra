import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ResumeRoute from './components/resume/ResumeRoute';
import Header from './components/navigation/Header';
import MaterialTheme from './styles/MaterialTheme';
import FlexContainer from './components/common/FlexContainer';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={MaterialTheme}>
                <FlexContainer column>
                    <Header />
                    <ResumeRoute />
                    <div style={{width: "100%", height: 50}}>
                        Made with React.js, TypeScript and Material-UI
                    </div>
                </FlexContainer>
            </MuiThemeProvider>
        );
    }
}

export default App;
