import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    /* This will be xecuted when the component wrapped with error boundary throws an error */
    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        })
    }

    render() {
        if (this.state.hasError) {
            console.log("Hello" + this.state.errorMessage);
            // This did not render for some reason
            //return <h1>{this.state.errorMessage}</h1>
        }
        else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;