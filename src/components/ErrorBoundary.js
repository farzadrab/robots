import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    };

    componentDidCatch(error, errorInfo) {
        this.setState = {
            hasError: true
        }
    };

    render() {
        if (this.state.hasError) {
            return this.props.children;
        } else {
            return <p>Oops!</p>;
        }
    }
}

export default ErrorBoundary;