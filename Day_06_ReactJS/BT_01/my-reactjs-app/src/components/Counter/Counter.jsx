import React from 'react';
export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0, loading: true};
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    // goi API
    setTimeout(() => {
      this.setState({loading: false});
    }, 4000);
    // có data
    // lưu lại trong state
    // set State loading = false
  }

  onDecrease = () => {
    this.setState({count: this.state.count - 1});
  };

  onIncrease = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    console.log('Rendered');
    return (
      <div>
        {this.state.loading ? (
          <div>Loadingggggggggggg</div>
        ) : (
          <>
            <h1>Hello {this.props.name}</h1>
            <button className="count-btn" onClick={() => this.onDecrease()}>
              -
            </button>
            <span className="count">{this.state.count}</span>
            <button className="count-btn" onClick={() => this.onIncrease()}>
              +
            </button>
          </>
        )}
      </div>
    );
  }
}
