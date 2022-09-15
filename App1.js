import PropsExample from "./components/PropsExample";

function App1(props) { 
    const value = 'test'; 
        return (
            <div>
                <h1>{props.value}</h1>
                <p>{props.name} {props.age}</p>
                <PropsExample value={value}></PropsExample>
            </div>
        );
}
  
  export default App1;