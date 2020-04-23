
class App extends React.Component {
  constructor(props){
    super(props);
    // console.log(props)
    this.state = {
      form: 0,
    };
    this.checkout=this.checkout.bind(this);
  }
checkout() {
  console.log('clicked')
  var next = this.state.form
  next ++;
  this.setState({
    form: next
  })
console.log(this.state.form)
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

