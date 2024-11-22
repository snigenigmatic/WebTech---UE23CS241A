//using the new root api from react18
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<h1>Welcome to REACTJS</h1>);

var dest=document.querySelector("#container");
var dest2=document.querySelector("#container2");
var lettercomp=document.querySelector("#letters");
class Helloo extends React.Component{
    render(){
        return <h1 id='lol'>Hii worldd</h1>
          }
    }

ReactDOM.render(
    <div>
        <Helloo/>
        </div>,
        dest
    );

class Hellosuperheroes extends React.Component{//keep class name capitalised first letter!!
    render(){
        return <div> Hi {this.props.type}
                <h1 style={{backgroundColor:"red",color:'rgb(163, 216, 196)',padding:'10px'}}> {this.props.children} </h1>
                </div>
            }
    }

ReactDOM.render(
    <div>
    <Hellosuperheroes type="greetingss">
        Hello, Batman...
        </Hellosuperheroes>
        </div>,dest2
);//need dest2, can't access same id thing, in this reactrender thing

      //--------------------------style electric bugaloo-------------------------------

class Letter extends React.Component{
    render(){
    var letterStyle={
        backgroundColor:this.props.clr,
        color:'white',
        display:"inline-block",//makes all inline
        padding:"25px",
        margin:"25px",//cuts into boxes
        fontSize:'100px',
        }
    return <div style={letterStyle}>{this.props.children}</div>
    }
}

ReactDOM.render(
    <div align='center'>
    <Letter clr='yellow'>
        A
    </Letter>
    <Letter clr='red'>
        E
    </Letter>
    <Letter clr='blue'>
        I
    </Letter>
    <Letter clr='green'>
        O
    </Letter>
    <Letter clr='purple'>
        U
    </Letter>
    </div>,
    lettercomp
);               