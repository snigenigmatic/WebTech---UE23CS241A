// // stateless functional component

// const Stuff1 = (props) => {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <p>{props.content}</p>
//         </div>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<div>
//     <Stuff1 title="Title 1" content="Content 1" />
//     <Stuff1 title="Title 2" content="Content 2" />
//     <Stuff1 title="Title 3" content="Content 3" />
// </div>)

// referencing

// plus and minus buttons
const PlusButton = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>+</button>
        </div>
        
    );
}

const MinusButton = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>-</button>
        </div>
    );
}

// counter
const Counter = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <input type="text" value={props.count} readOnly/>
        </div>
    );
});


// // stateful functional component

const CounterApp = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <Counter count={count} />
            <PlusButton onClick={() => setCount(count + 1)} />
            <MinusButton onClick={() => setCount(count - 1)} />
        </div>
    );
}

// stateful class component

// using references

// class CounterApp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//         this.increment = this.increment.bind(this);
//         this.decrement = this.decrement.bind(this);
//     }

//     increment() {
//         this.setState({ count: this.state.count + 1 });
//     }

//     decrement() {
//         this.setState({ count: this.state.count - 1 });
//     }

//     render() {
//         return (
//             <div>
//                 <Counter count={this.state.count} />
//                 <PlusButton onClick={this.increment} />
//                 <MinusButton onClick={this.decrement} />
//             </div>
//         );
//     }
// }

// use refs

// class CounterApp extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             count: 0
//         };
//     }

//     increment = () => {
//         this.setState((prevState) => ({
//             count: prevState.count + 1
//         }));
//     }

//     decrement = () => {
//         this.setState((prevState) => ({
//             count: prevState.count - 1
//         }));
//     }

//     changeInput = (e) => {
//         this.setState({ count: e.target.value });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Counter</h1>
//                 <button onClick={this.decrement}>-</button>
//                 <input type="text" value={this.state.count} onChange={this.changeInput} />
//                 <button onClick={this.increment}>+</button>
//             </div>
//         );
//     }
// }

ReactDOM.render(<CounterApp />, document.getElementById('root'));