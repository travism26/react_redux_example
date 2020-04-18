import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  render() {
    // this.props === { songs: state.songs } <-- pulled from mapStateToProps();
    console.log(this.props);
    return <div>SongList</div>;
  }
}

const mapStateToProps = (state) => { // <-- similar method is always done...
//   console.log(state);
  return { songs: state.songs };
  // return state
};

export default connect(mapStateToProps)(SongList); // <-- this is always done this way
