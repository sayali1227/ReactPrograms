import './App.css';
import App1 from './App1';

function App() {

  const valueArray=[{name: 'Sayali', age: 26, address: 'Nashik'},
  {name: 'Sayali2', age: 27, address: 'Nashik'},
  {name: 'Sayali3', age: 28, address: 'Nashik'},
  {name: 'Sayali4', age: 29, address: 'Nashik'},
  {value : 'Props Example...!'}];

  return (  
    <div className='App-header'>
      <App1 value={valueArray[4].value}></App1> 
      <h3>Hello world...!</h3>   
      <App1 name={valueArray[0].name} age={valueArray[0].age}></App1>
      <App1 name={valueArray[1].name} age={valueArray[1].age}></App1>
      <App1 name={valueArray[2].name} age={valueArray[2].age}></App1>
      <App1 name={valueArray[3].name} age={valueArray[3].age}></App1>    
    </div>        
  );
  
}

export default App;
