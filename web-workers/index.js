class Hello extends React.Component{
    constructor(props){
    console.log("in constructor")
    super(props)
    this.state={name:"sindhu",address:"nagarbavi",phno:"9876"}
    //this.updatestate = this.updatestate.bind(this)
    //this.fun1 = this.fun1.bind(this)
    }
    render(){
    console.log("in render")
    return (<div><h1>hello {this.state.name}</h1>
    <p> you are from {this.state.address} and your contact number is 

    {" " + this.state.phno}</p>
    
    <button onClick = {this.updatestate}>click here to change
    
    state</button>
    
    <button onClick = {this.fun1}> click here to delete the
    
    user</button></div>
    )
    }
    componentDidUpdate(prevProps, prevState){
    console.log("component did update")
    
    }
    UNSAFE_componentWillUpdate() {
    console.log("will update")
    
    }
    componentDidMount(){
    
    console.log("did mount")
    const worker = new Worker('worker.js');
    worker.postMessage(10); // Example data
    worker.onmessage = function(event) {
      console.log('Result from worker:', event.data);
    };
}
UNSAFE_componentWillMount() {
console.log("will mount")

}
fun1 = () => {
    console.log("Component deleted");
}
componentWillUnmount(){
console.log("will unmount")
}
shouldComponentUpdate(nextProps, nextState) {
console.log("yes, in shouldCOmponentupdate")
return true;
}
updatestate =()=>{
console.log("in updatestate")
this.setState({name:"pai"}) }
}

// Ensure there is a DOM element with id 'root'
const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Hello />);
} else {
    console.error("No element with id 'root' found.");
}