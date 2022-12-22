import React, {Component} from 'react';
import './App.css';

//----------------------------------------
// Типизация функциональных компонентов
//----------------------------------------

// type TitleProps ={
//   title: string,
//   test? : string
// }

// // const Title:React.FC<{title: string}> = ({title}) => <h1>{title}</h1>;
// const Title = ({title, test = 'test'}: TitleProps) => <h1>{title}</h1>;

// const App = () => <Title title="test"/>

// export default App;


//----------------------------------------
// Типизация функциональных компонентов
//----------------------------------------

// type CounterState = {
//   count: number,
// }

// type CounterProps = {
//   title?: string,
// }

// class Counter extends Component<CounterProps, CounterState>{
//   constructor(props: CounterProps){
//     super(props)

//     this.state = {
//       count: 0
//     }
//   }


//   // static defaultProps: CounterProps = {
//   //   title: "Default counter"
//   // }

//   // static getDerivedStateFromProps(props: CounterProps, state:CounterState): CounterState | null {
//   //     return true ? {count: 2} : null;
//   // }

//   // componentDidMount():void{
    
//   // }

//   // shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState):boolean{
//   //   return true
//   // }



//   handleClick = () =>{
//     this.setState(({count})=> ({
//       count: ++count
//     }));
//   }

//   render(): React.ReactNode {
//     return(
//       <div>
//         <h1>{this.props.title}{this.state.count}</h1>
//         <button onClick={this.handleClick}>+1</button>
//       </div>
//     )
//   }
// }

// const App = () => <Counter title='Counter:'/>

// export default App;




//----------------------------------------
// Типизация событий
//----------------------------------------=

type CounterState = {
  count: number,
}

type CounterProps = {
  title?: string,
}

class Counter extends Component<CounterProps, CounterState>{
  state= {
    count:0,
  }


  handleClick = () =>{
    this.setState(({count})=> ({
      count: ++count
    }));
  }

  render(): React.ReactNode {
    return(
      <div>
        <h1>{this.props.title}{this.state.count}</h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

const App = () => <Counter title='Counter:'/>

export default App;