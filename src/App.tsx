import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ResumeRoute from './components/resume/ResumeRoute';
import Header from './components/navigation/Header';
import Footer from './components/navigation/Footer';
import MaterialTheme from './styles/MaterialTheme';
import FlexContainer from './components/common/FlexContainer';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={MaterialTheme}>
                <FlexContainer column>
                    <Header />
                    <ResumeRoute />
                    <Footer />
                </FlexContainer>
            </MuiThemeProvider>
        );
    }
}

export default App;
