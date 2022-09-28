import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../common/elements/TextInput";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import TabButtons from "./tabButtons";
import classes from '../styles/personalInfo.module.css'

const PersonalInfo = ({ }) => {
  const [fName, setFname] = useState('');
  const [mName, setMname] = useState('');
  const [lName, setLname] = useState('');
  const [selectedGender, setSelectedGender] = useState('mrs');


  const btnUploadPhoto_Click = (e: any, name: any) => {
    console.log(fName);
  };
  const btnBack_Click = (e: any, name: any) => {
    console.log(lName);
  };
  const btnNext_Click = (e: any, name: any) => {
    console.log(mName);
  };

  const handleRbGenderChange = (event: any) => {
    console.log(event.target.value);
    setSelectedGender(event.target.value);
  };

  return (

    <ElementRootRoot className={classes.responsive}>
      <TabButtons />
      <FlexColumn1>
        <Label4>Upload Photo</Label4>
        <BlackFlexColumn>
          <Image2 src={`https://file.rendit.io/n/wBfoGqYEozvIQsTZQhVC.svg`} />
          <Btntext3 onClick={(e) => btnUploadPhoto_Click(e, "Btntext3")}>
            Upload Photos
          </Btntext3>
        </BlackFlexColumn>
        <Label5>
          Please upload a photo of yourself with a maximum size of 1 MB
        </Label5>
        <FlexColumn2>
          <Label4>Suffex</Label4>
          <FlexRow6>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="mrs"
                name="grp_gender">

                <FormControlLabel value="mrs" control={<Radio checked={selectedGender === 'mrs'}
                  value="mrs" name="gender" id="mrs" onChange={handleRbGenderChange} />} label="Mrs" />

                <FormControlLabel control={<Radio checked={selectedGender === 'mr'} onChange={handleRbGenderChange}
                  value="mr" name="gender" id="mr" />} label="Mr" />

                <FormControlLabel control={<Radio checked={selectedGender === 'other'} onChange={handleRbGenderChange}
                  value="other" name="gender" id="other" />} label="Prefer not to say" />

              </RadioGroup>
            </FormControl>
          </FlexRow6>
        </FlexColumn2>
        <FlexRow10>
          <Formstandard>
            <TextInput
              name="Fname"
              label="First Name"
              type="text"
              placeholder=""
              value={fName}
              disabled={false}
              onChange={(e) => { setFname(e.target.value) }}
            />
          </Formstandard>
          <Formstandard1>
            <TextInput
              name="Mname"
              label="Middle Name"
              type="text"
              placeholder=""
              value={mName}
              disabled={false}
              onChange={(e) => { setMname(e.target.value) }}
            />
          </Formstandard1>
          <Formstandard2>
            <TextInput
              name="Lname"
              label="Last Name"
              type="text"
              placeholder=""
              value={lName}
              disabled={false}
              onChange={(e) => { setLname(e.target.value) }}
            />
          </Formstandard2>
        </FlexRow10>
      </FlexColumn1>
      <FlexRow11>
        <Btntext2 onClick={(e) => btnBack_Click(e, "Btntext2")}>
          Back
        </Btntext2>
        <Btntext1 onClick={(e) => btnNext_Click(e, "Btntext1")}>
          Next
        </Btntext1>
      </FlexRow11>
    </ElementRootRoot>
  );
};

export default PersonalInfo;

const Label4 = styled.div`
  width: 856px;
  color: #131022;
  font-size: 16px;
  font-weight: 600;
  font-family: Roboto Slab;
  line-height: 25.6px;
`;
const ElementRootRoot = styled.div`
  width: 1349px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f8faff;
  overflow: hidden;
  border-radius: 25px;
  padding-top: 40px;
`;
const FlexColumn1 = styled.div`
  width: 1084px;
  height: 592px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  align-items: flex-start;
  margin: 0px 0px 164px 0px;
`;
const BlackFlexColumn = styled.div`
  width: 201px;
  height: 201px;
  gap: 63px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(
    90deg,
    #48c0e8 0%,
    #4887e8 50%,
    #4b48e8 100%
  );
  border-radius: 15px;
  padding: 46px 78px;
`;
const Image2 = styled.img`
  width: 60.07px;
  height: 72px;
  margin: 0 -5.98px -45px 0px;
`;
const Btntext3 = styled.button`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  align-items: center;
  color: #48c0e8;
  font-size: 14px;
  font-weight: 600;
  font-family: Roboto Slab;
  line-height: 22.4px;
  text-align: right;
  white-space: nowrap;
  border-style: solid;
  border-color: #48c0e8;
  border-radius: 40px;
  padding: 6px 18px;
  border-width: 2px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  width: 74px;
`;
const Label5 = styled.div`
  color: #131022;
  font-size: 12px;
  font-weight: 300;
  font-family: Roboto Slab;
  line-height: 19.2px;
  white-space: nowrap;
`;
const FlexColumn2 = styled.div`
  width: 856px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FlexRow6 = styled.div`
  gap: 35px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 2px;
`;

const FlexRow10 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: stretch;
  align-items: center;
`;
const Formstandard = styled.div`
  width: 345px;
  gap: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 24px 0px 0px;
`;
const Formstandard1 = styled.div`
  width: 345px;
  gap: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 25px 0px 0px;
`;
const Formstandard2 = styled.div`
  width: 345px;
  gap: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FlexRow11 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 123px 0px 130px;
`;
const Btntext2 = styled.button`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #48c0e8;
  font-size: 16px;
  font-weight: 600;
  font-family: Roboto Slab;
  line-height: 25.6px;
  text-align: right;
  white-space: nowrap;
  border-style: solid;
  border-color: #48c0e8;
  background-color: #f9faff;
  border-radius: 40px;
  padding: 11px 58px;
  border-width: 2px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const Btntext1 = styled.button`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Roboto Slab;
  line-height: 25.6px;
  text-align: right;
  white-space: nowrap;
  background-color: #48c0e8;
  border-radius: 40px;
  padding: 13px 60px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;