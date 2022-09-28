import { useRouter } from "next/router";
import styled from "styled-components";

const TabButtons = () => {
  let navigate = useRouter();

  const navFunct = (e: Event) => {
    e.preventDefault();
    navigate.push("/welcome");
  }

  return (

    <FlexRow1>
      <FlexColumn>
        <RegisterAsScholar1>
          Register as<RegisterAsScholar> Scholar</RegisterAsScholar>
        </RegisterAsScholar1>
        <Text9>Personal Information</Text9>
      </FlexColumn>
      <FlexRow2>
        <Text11 onClick={() => { console.log("hello") }}>1</Text11>
        <Line3 src={`https://file.rendit.io/n/RuEyNdUoKM3b07bBqwda.svg`} />

        <Text11 onClick={(e: any) => navFunct(e)} >2</Text11>

        <Line3 src={`https://file.rendit.io/n/RuEyNdUoKM3b07bBqwda.svg`} />
        <Text11>3</Text11>
        <Line3 src={`https://file.rendit.io/n/RuEyNdUoKM3b07bBqwda.svg`} />
        <Text11>4</Text11>
        <Line3 src={`https://file.rendit.io/n/RuEyNdUoKM3b07bBqwda.svg`} />
        <Text11>5</Text11>
        <Line3 src={`https://file.rendit.io/n/RuEyNdUoKM3b07bBqwda.svg`} />
        <Text11>6</Text11>
        <Line3 src={`https://file.rendit.io/n/RuEyNdUoKM3b07bBqwda.svg`} />
        <Text11>7</Text11>
        <Line3 src={`https://file.rendit.io/n/RuEyNdUoKM3b07bBqwda.svg`} />
        <Text11>8</Text11>
        <Line3 src={`https://file.rendit.io/n/RuEyNdUoKM3b07bBqwda.svg`} />
        <Text11>9</Text11>
      </FlexRow2>
    </FlexRow1>

  )
}

export default TabButtons;

const FlexRow1 = styled.div`
  width: 1194px;
  display: flex;
  flex-direction: row; 
  align-self: flex-end;
  align-items: flex-end;
  margin: 0px 123px 50px 0px;
`;
const FlexColumn = styled.div`
width: 692px;
gap: 5px;
display: flex;
flex-direction: column;
justify-content: center;
align-self: stretch;
align-items: flex-start;
`;
const RegisterAsScholar1 = styled.div`
  align-self: stretch;
  color: #131022;
  font-size: 28px;
  font-family: Roboto Slab;
  line-height: 37.1px;
  white-space: nowrap;
`;
const RegisterAsScholar = styled.div`
  display: contents;
  color: #131022;
  font-size: 28px;
  font-weight: 600;
  font-family: Roboto Slab;
  line-height: 37.1px;
  white-space: pre-wrap;
`;

const Text11 = styled.div`
 
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: #48c0e8;
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto Slab;
  line-height: 27.07px;
  text-align: center;
  white-space: nowrap;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/EEHKo0uCI2BNZ1OD5QHo.svg");
  padding: 6px 15px 6px 16px;
`;
const Line3 = styled.img`
  width: 20px;
  height: 2px;
`;
const Text9 = styled.div`
  color: #131022;
  font-size: 16px;
  font-family: Roboto Slab;
  line-height: 27.07px;
  white-space: nowrap;
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;