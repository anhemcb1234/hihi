import React from "react";

class ItemNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="item-note">
          <select
            defaultValue={this.props.data?.status}
            onChange={(e) => this.props.updateFunc(e.target.value)}
          >
            <option value={0}>Pending</option>
            <option value={1}>Doing</option>
            <option value={2}>Review</option>
            <option value={3}>Success</option>
            <option value={4}>Red star</option>
          </select>

          <div className="text-box" onClick={this.props.detailToggle}>
            <h4>{this.props.data?.title}</h4>
          </div>
          <button onClick={this.props.delFunc}>Xoá</button>
        </div>

        <style jsx="true">{`
          .item-note {
            display: flex;
            align-items: center;
          }
          .item-note .text-box {
            flex: 1;
          }
        `}</style>
      </>
    );
  }
}

export default ItemNote;
