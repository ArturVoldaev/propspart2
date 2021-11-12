import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      p1: '',
      count: 0,
      task7: '',
      task8: '',
      task81: '',
      task10: '',
      task11: '',
      widthTask12: 100,
      heightTask12: '100px',
      task13: 100,
      task14Image: 'https://i.pinimg.com/736x/c6/e3/a7/c6e3a714a09cdf0211d181e8fdb5a683.jpg',
    }

    this.click = this.click.bind(this);
    this.task3 = this.task3.bind(this);
    this.task4 = this.task4.bind(this);
    this.task7 = this.task7.bind(this);
    this.task8 = this.task8.bind(this);
    this.task10 = this.task10.bind(this);
    this.task11 = this.task11.bind(this);
    this.task12 = this.task12.bind(this);
    this.task12ResetButton = this.task12ResetButton.bind(this);
    this.task13 = this.task13.bind(this);
    this.task14 = this.task14.bind(this);
  }

  

  click() {
    console.log('button work') ///// Task 1
    this.setState({p1:'button work'});
  }

  task3() {
    let count = this.state.count;
    this.setState({count: ++count});
  }

  task4() {
    let count = 0;
    this.setState({count: count});
  }

  task5() {
    console.log("move");
  }

  task6(e) {
    console.log(e.target.attributes.data.value);
  }

  task7(e) {
    this.setState({task7: e.target.value})
  }

  task8(e) {
    if (e.target.value.length < 6) {
      this.setState({task8: "Пароль должен быть более 6 символов!!!"})

    } else {
      this.setState({task8: ""})
    }
    this.setState({task81: e.target.value})
  }

  task9(e) {
    if(e.target.checked) {
      console.log("checkbox checked");
    } else {
      console.log("checkbox unchecked");
    }
  }

  task10(e) {
    this.setState({task10: e.target.value})
  }

  task11(e) {
    this.setState({task11: e.target.value})
  }

  task12() {
    let defaultWidth = this.state.widthTask12
    this.setState({widthTask12: 3+defaultWidth})
  }

  task12ResetButton() {
    this.setState({widthTask12: 100})
  }

  task13(e) {
    this.setState({task13: e.target.value})
  }

  task14() {
    if(typeof this.state.task14Image === "string") {
      this.setState({task14Image: 1})
    } else if (this.state.task14Image === 1) {
      this.setState({task14Image:'https://i.pinimg.com/736x/c6/e3/a7/c6e3a714a09cdf0211d181e8fdb5a683.jpg'})
    }
  }

  render() {
    return (
      <div>
        <div>
          <p>{`Task 1-2`}</p>
          <button onClick={this.click}>Ckick me</button>
          <p>{this.state.p1}</p>
        </div>
        <div>
          <p>{`Task 3`}</p>
          <button onClick={this.task3}>Count</button>
          <p>{this.state.count}</p>
        </div>
        <div>
          <p>{`Task 4`}</p>
          <button onClick={this.task4}>ResetCount</button>
        </div>
        <div>
          <p>{`Task 5`}</p>
          <div onMouseMove={this.task5} style={{background: "green", width: "100px", height:"100px"}}></div>
        </div>
          <p>{`Task 6`}</p>
          <button data={"atr-1"} onClick={this.task6}>atr1</button><button data={"atr-2"} onClick={this.task6}>atr2</button>
        <div>
          <p>{`Task 7`}</p>
          <input type={"text"} onChange={this.task7}/>
          <p>{this.state.task7}</p>
        </div>
        <div>
          <p>{`Task 8`}</p>
          <input type={"text"} onChange={this.task8}/>
          <p>{this.state.task8}</p>
          <p>{this.state.task81}</p>
        </div>
        <div>
          <p>{`Task 9`}</p>
          <input type={"checkbox"} onChange={this.task9}/>
        </div>
        <div>
          <p>{`Task 10`}</p>
          <input type={"radio"} name={"radio"} onChange={this.task10}/>
          <input type={"radio"} name={"radio"} onChange={this.task10}/>
          <input type={"radio"} name={"radio"} onChange={this.task10}/>
          <p>{this.state.task10}</p>
        </div>
        <div>{`Task 11`}
          <select onChange={this.task11}> 
            <option defaultValue={"value1"}>Значение 1</option>
            <option defaultValue={"value2"}>Значение 2</option>
            <option defaultValue={"value3"}>Значение 3</option>
          </select>
          <p>{this.state.task11}</p>
        </div>
        <div>{`Task 12`}
          <div style={{height:this.state.heightTask12, width: this.state.widthTask12 + "px", background:"red"}}></div>
          <button onClick={this.task12}>Add width</button>
          <button onClick={this.task12ResetButton}>Reset width</button>
        </div>
        <div>{`Task 13`}
          <input type={"range"} defaultValue={this.state.task13} min={0} max={200} onChange={this.task13}/>
          <p>{this.state.task13}</p>
        </div>
        <div>{`Task 14`}
          <div style={{width: "200px", height:"200px"}}>
            <img style={{width: "100%"}} src={this.state.task14Image} alt={`Покемон`}/>
          </div>
          <button onClick={this.task14}>Hide image</button>
        </div>
      </div>
    );
  }
}



export default App;
