import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
    this.goBack = this.goBack.bind(this);
  }

  static getDerivedStateFromError() {
    return {
      error: true
    }
  }

  goBack() {
    window.location.back();
    this.setState({
      error: false
    })
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1 style={{ marginBottom: '20px' }}>
            An Error Has Occured
          </h1>
          <a
          className="go-back-btn"
            href="/#"
            onClick={this.goBack}
          >
            Go home
          </a>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary