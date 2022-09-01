import React, { Component } from "react";
const axios = require("axios");

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/countryleaderboard`).then((res) => {
      const data = res.data.sort((a, b) => b["Score"] - a["Score"]);
      this.setState({ data });
    });
  }

  renderListing() {
    let recordList = [];
    this.state.data.map((record, index) => {
      // console.log("HEJJ " + record["Username"]);
      return recordList.push(
        <tr>
          {/* <th scope="row">{index}</th> */}
          <td>{index + 1}.</td>
          <td>{record["Username"]}</td>
          <td>{record["Score"]}</td>
        </tr>
      );
    });

    return recordList;
  }

  render() {
    return (
      <>
      <div class='container' style={{ width: 20 + "rem" }}>
        <table class="table table-striped">
          <thead>
            <th scope="col">#</th>
            <th scope="col">Nadimak</th>
            <th scope="col">Bodovi</th>
          </thead>
          <tbody>{this.renderListing()}</tbody>
        </table>
      </div>
      </>
    );
  }
}

export default Leaderboard;
