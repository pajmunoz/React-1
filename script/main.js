
// const el = <h1 id="title" className="suckMyDick">
//   hola {2+5} 
//   <span> mundo</span>
//  </h1>;
// ReactDOM.render(el,document.getElementById('app'));
//
//  
// MI PRIMER COMPONENTE
function Saludar(props){
  return <div className="col-sm-12 col-md-3">hola {props.name}</div>
}
ReactDOM.render(
<div className="row">
    <Saludar name="Pablo1" />
    <Saludar name="Juan" />    
    <Saludar name="Marta" />  
    <Saludar name="Juana" />  
</div>,

document.getElementById('app') 
); 
 