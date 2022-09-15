function InputBox(){
    return(
        <div>
            <input type='text' id='name' placeholder="Enter name here"></input>
            <input type='text' id='age' placeholder="Enter age here"></input>
            <select>
                <option>Java</option>
                <option>Dot Net</option>
                <option>Angular</option>
                <option>React</option>
                <option>PHP</option>
            </select>
        </div>
    );
}
export default InputBox;