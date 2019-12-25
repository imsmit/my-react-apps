import React, { Component } from "react";
import QRReader from "react-qr-reader";

class QrReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: "No result"
    };
  }

  handleScan = data => {
    if (data && data.substring(0, 4) === "usr_") {
      this.setState({
        result: data
      });
      this.props.getCode(data);
      this.props.closeScanner();
    }
  };

  handleError = err => {
    console.error(err);
  };

  render() {
    return (
      <div className="text-center">
        <QRReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "100%", marginBottom: "1rem" }}
        />
        <p>{this.state.result}</p>
        <button className="btn btn-danger" onClick={this.props.closeScanner}>
          Cancel
        </button>
      </div>
    );
  }
}

export default QrReader;
