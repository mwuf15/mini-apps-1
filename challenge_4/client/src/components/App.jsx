import React from 'react';
import Board from './Board.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    console.log(event.target.id)
    document.getElementById(event.target.id).style.backgroundCOlor ='blue';

  }

  render() {
    return (
      <div>
          <Board handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default App;