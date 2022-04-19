import React from "react";

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="tabs">
          <h2>Note ProMax</h2>
          <button className="" onClick={this.props.addFunc}>
            + add new
          </button>
        </div>

        <style jsx="true">{`
          .tabs {
            display: flex;
            align-items: center;
          }
        `}</style>
      </>
    );
  }
}

export default Tabs;
