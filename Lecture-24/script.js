// const NameList = () => {
//     return (
//         [
//                 <p key="1">College</p>,
//                 <p key="2">Bengaluru</p>,
//                 <p key="3">World Cup</p>,
//                 <p key="4">Time</p>

//         ]
//     );
// }

// // use createRoot
// const root = ReactDOM.createRoot(document.getElementById('root'));

// // Start rendering
// root.render(<NameList />);

/*Mapping*/

const lists = ['College', 'Bengaluru', 'World Cup', 'Time'];

const Namelist = () => {
    return (
        <ul type="square">
            {lists.map((list, index) => {
                return <li key={index}>{list}</li>
            })}
        </ul>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Namelist />);