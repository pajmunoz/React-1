
// const el = <h1 id="title" className="suckMyDick">
//   hola {2+5} 
//   <span> mundo</span>
//  </h1>;
// ReactDOM.render(el,document.getElementById('app'));
//
//  
// MI PRIMER COMPONENTE
function Saludar(props) {
    return React.createElement(
        "div",
        { className: "col-sm-12 col-md-3" },
        "hola ",
        props.name
    );
}
ReactDOM.render(React.createElement(
    "div",
    { className: "row" },
    React.createElement(Saludar, { name: "Pablo" }),
    React.createElement(Saludar, { name: "Juan" }),
    React.createElement(Saludar, { name: "Marta" }),
    React.createElement(Saludar, { name: "Juana" })
), document.getElementById('app'));
