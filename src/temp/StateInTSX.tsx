import React, { Component } from 'react';

interface IProps {
    text: String
}

interface IState {
  playOrPause?: string; // xử lý null ?
}

class StateInTSX extends React.Component<IProps, IState> {
  // ------------------------------------------^
  constructor(props: IProps) {
    super(props);

    this.state = {
      playOrPause: 'Play'
    };
  }

  render() {
    return(
      <div>
        <button
          title={this.state.playOrPause}
        >
          Play {this.props.text}
        </button>
      </div>
    );
  }
}

export default StateInTSX; // state and props in tsx