// const Counter = () => {
//     const [count, setCount] = React.useState(0);

//     const increment = () => {
//         setCount(count + 1);
//     };

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={increment}>Increase</button>
//         </div>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Counter />);

// useState with useEffect

// const Timer = () => {
//     const [count, setCount] = React.useState(0);

//     React.useEffect(() => {
//         const interval = setInterval(() => {
//             setCount(count + 1);
//         }, 1000);
//     });

//     return (
//         <div>
//             <h1>I Have rendered {count} times!</h1>
//         </div>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);


// refs using useRef 

class MyDiv extends React.Component {
    constructor(props) {
        super(props);
        this.setRef = (el) => this.myuref = el; 
        
    this.showChar = (event) => {
        this.myref.innerHTML += event.key;
    }
    }

    render() {
        return (
            <div>
                <input type="text" onKeyPress={this.showChar} ref={this.setRef} />
                <p ref={el => this.myref = el}></p>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyDiv />);