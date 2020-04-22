
class App extends React.Component {
  constructor(props){
    super(props);
    // console.log(props)
    this.state = {
      formNumber: ''
    };
  }
checkout() {
  console.log('clicked')
}

render() {
  return (
    <div>
      <button onClick={this.checkout}> Checkout</button>
    </div>
  )
}
}

ReactDOM.render(<App />, document.getElementById('app'))

