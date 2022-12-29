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

//==== OnClick Event

// type CounterState = {
//   count: number,
// }

// type CounterProps = {
//   title?: string,
// }

// class Counter extends Component<CounterProps, CounterState>{
//   state= {
//     count:0,
//   }


//   handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) =>{
//     console.log(`${e.clientX}, ${e.clientY}`)
//     this.setState(({count})=> ({
//       count: ++count
//     }));
//   }

//   render(): React.ReactNode {
//     return(
//       <div>
//         <h1>{this.props.title}{this.state.count}</h1>
//         <button onClick={this.handleClick}>+1</button>
//         <a href="" onClick={this.handleClick}>Link</a>
//       </div>
//     )
//   }
// }

// const App = () => <Counter title='Counter:'/>

// export default App;





//==== OnFocus and FormElements and OnCopy Eventt

// class Form extends Component<{}, {}>{

//   handleFocus = (e : React.FocusEvent<HTMLInputElement>) => {
//     console.log(e.currentTarget)
//   }

//   handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Submited")
//   }

//   handleCopy =(e: React.ClipboardEvent)=>{
//     console.log("Copied")
//   }

//   render(){
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Simple Text:
//           <input onCopy={this.handleCopy} onFocus={this.handleFocus} type="text" name="text" />
//           <button type='submit'>Submit</button>
//         </label>
//       </form>
//     )
//   }
// }

// const App:React.FC = () => <Form/>

// export default App;



//----------------------------------------
// Типизация елементов 
//----------------------------------------=


const POSITIONS = [
  {
    id: 'fd',
    value: 'Front-end Developer',
    title: 'Front-end Developer',
  },
  {
    id: 'bd',
    value: 'Back-end Developer',
    title: 'Back-end Developer',
  }
];

const DEFAULT_SELECT_VALUE = POSITIONS[0].value;
const styles = { display: 'block', marginBottom: '10px' };

class Form extends Component {
  
  state = {
    inputText: '',
    textareaText: '',
    selectText: DEFAULT_SELECT_VALUE,
    showData: {
      name: '',
      text: '',
      position: '',
    }
  }

  private rootRef = React.createRef<HTMLSelectElement>();

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value: inputText } } = e;
    this.setState({ inputText });
  };

  handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { target: { value: textareaText } } = e;
    this.setState({ textareaText });
  };

  handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { target: { value: selectText } } = e;
    this.setState({ selectText });
  };

  handleShow = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { inputText, textareaText, selectText } = this.state;

    this.setState({
      inputText: '',
      textareaText: '',
      selectText: DEFAULT_SELECT_VALUE,
      showData: {
        name: inputText,
        text: textareaText,
        position: selectText,
      }
    })
  };

  render() {
    const { inputText, textareaText, selectText, showData } = this.state;
    const { name, text, position } = showData;

    return (
      <>
        <form>
          <label style={styles}>
            Name:
            <input
              type="text"
              value={inputText}
              onChange={this.handleInputChange}
            />
          </label>

          <label style={styles}>
            Text:
            <textarea
              value={textareaText}
              onChange={this.handleTextareaChange}
            />
          </label>

          <select
            style={styles}
            value={selectText}
            onChange={this.handleSelectChange}
            ref={this.rootRef}
          >
            {POSITIONS.map(({ id, value, title }) => (
              <option
                key={id}
                value={value}
              >{title}</option>
            ))}
          </select>

          <button onClick={this.handleShow}>Show Data</button>
        </form>

        <h2>{name}</h2>
        <h3>{text}</h3>
        <h3>{position}</h3>
      </>
    );
  }
}

const App:React.FC = () => <Form />;

export default App;