import PropsExample2 from "./PropsExample2";

function PropsExample1(){

    const msg = 'Click here to next..!';

    return(
        <div><PropsExample2 msg={msg}/></div>        
    );
}
export default PropsExample1;