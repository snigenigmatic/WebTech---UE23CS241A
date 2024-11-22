/*useState*/
// use the state hook to create a timer that counts up every second
// display the timer in the browser

const root = ReactDOM.createRoot(document.getElementById('root'));

// const Timer = () => {
//     const [count, setCount] = React.useState(0);
    
//     React.useEffect(() => {
//         const interval = setInterval(() => {
//         setCount(count + 1);
//         }, 1000);
//         return () => clearInterval(interval);
//     }, [count]);
    
//     return <div>{count}</div>;
// }

// root.render(<Timer />);    

// class Constructor extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { time: new Date().toLocaleTimeString() };
//     }

//     componentDidMount() {
//         this.interval = setInterval(() => {
//             this.setState({ time: new Date().toLocaleTimeString() });
//         }, 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.interval);
//     }

//     render() {
//         return <div className="time">{this.state.time}</div>;
//     }
// }

// root.render(<Constructor />);

// create two counters, one counts up fromr 0 to 50, other counts down from 50 to 0
// display both counters in the browser

const Counter = () => {
    const [count, setCount] = React.useState(0);
    const[countdown, setCountDown] = React.useState(50);


    React.useEffect(() => {
        const interval = setInterval(()=>{
            setCount(count + 1);
            setCountDown(countdown - 1);
        }, 1000)
        return () => clearInterval(interval);
    }, [count, countdown]);
    return (
        <div>
            <div className="countup">{count}</div>
            <div className="countdown">{countdown}</div>
        </div>
    );
}

root.render(<Counter />);