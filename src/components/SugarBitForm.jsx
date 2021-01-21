import { React, useState } from "react";
import { Form, Button, Col, Alert } from "react-bootstrap";
import { sentData } from "../lip/api";
import { useGlobal } from 'reactn';
//age (>40, 40-49,50-59,60<),
//gender(male, female),
//familyDiabetes (yes,no),
//highBloodPressure(yes, no),
//physicallyActive(yes, no),
//smoking(yes, no),
//alcohol(yes, no),
//regularMedicine(yes, no),
//junkFood (ocasionally,often, veryoften,always),
//stress,(sometimes, veryoften, not at all, always),
//bloodPressureLevel(normal,high,low)
//prediabetes(yes, no),
//urinationFrequency, (not much, quite often)
//pregnanciesNumber (int)
//bmi (float)
//sleep (hours of sleep)
//sleepSound (hours of sleepSound)

function SugarBitForm() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [familyDiabetes, setFamilyDiabetes] = useState("");
  const [highBloodPressure, setHighBloodPressure] = useState("");
  const [physicallyActive, setPhysicallyActive] = useState("");
  const [smoking, setSmoking] = useState("");
  const [alcohol, setAlcohol] = useState("");
  const [regularMedicine, setRegularMedicine] = useState("");
  const [junkFood, setJunkFood] = useState("");
  const [stress, setStress] = useState("");
  const [bloodPressureLevel, setBloodPressureLevel] = useState("");
  const [prediabetes, setPrediabetes] = useState();
  const [urinationFrequency, setUrinationFrequency] = useState();
  const [pregnanciesNumber, setPregnanciesNumber] = useState();
  const [bmi, setBmi] = useState();
  const [sleep, setSleep] = useState();
  const [sleepSound, setSleepSound] = useState();
  const [areAllFieldFilled, setAreAllFieldFilled] = useState(true);
  const [alert, setAlert] = useState();
  const [ global, setGlobal ] = useGlobal()
  //   if (
  //     age &&
  //     gender &&
  //     familyDiabetes &&
  //     highBloodPressure &&
  //     physicallyActive &&
  //     smoking &&
  //     alcohol &&
  //     regularMedicine &&
  //     junkFood &&
  //     stress &&
  //     bloodPressureLevel &&
  //     prediabetes &&
  //     urinationFrequency &&
  //     urinationFrequency &&
  //     pregnanciesNumber &&
  //     bmi &&
  //     sleep &&
  //     sleepSound
  //   ) {
  //     setAreAllFieldFilled(true);
  //   } else {
  //     setAreAllFieldFilled(false);
  //   }

  const allFormData = {
    Age: age,
    Gender: gender,
    Family_Diabetes: familyDiabetes,
    highBP: highBloodPressure,
    PhysicallyActive: physicallyActive,
    Smoking: smoking,
    Alcohol: alcohol,
    RegularMedicine: regularMedicine,
    JunkFood: junkFood,
    Stress: stress,
    BPLevel: bloodPressureLevel,
    Pdiabetes: prediabetes,
    UriationFreq: urinationFrequency,
    Pregnancies: pregnanciesNumber,
    BMI: bmi,
    Sleep: sleep,
    SoundSleep: sleepSound,
  };

  const myFunc = () => {
    console.log("allFormData :>> ", allFormData);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const allFormData = {
      Age: age,
      Gender: gender,
      Family_Diabetes: familyDiabetes,
      highBP: highBloodPressure,
      PhysicallyActive: physicallyActive,
      Smoking: smoking,
      Alcohol: alcohol,
      RegularMedicine: regularMedicine,
      JunkFood: junkFood,
      Stress: stress,
      BPLevel: bloodPressureLevel,
      Pdiabetes: prediabetes,
      UriationFreq: urinationFrequency,
      Pregnancies: pregnanciesNumber,
      BMI: bmi,
      Sleep: sleep,
      SoundSleep: sleepSound,
    };
    const sentDataResult = await sentData(allFormData);
    //console.log(sentDataResult);
    setGlobal(sentDataResult);
    console.log("sentDataResult :>> ", sentDataResult);
    setAlert(sentDataResult)
    
  };

  return (
    
    <Form id="heathForm" onSubmit={handleFormSubmit}>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Age</Form.Label>
          <Form.Control
            as="select"
            value={age}
            onChange={(e) => {
              myFunc();
              setAge(e.target.value);
            }}
          >
            <option value="-1">Choose...</option>
            <option value="less than 40">less than 40</option>
            <option value="40-49">40-49</option>
            <option value="50-59">50-59</option>
            <option value="60 or older">60 or older </option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="-1">Choose...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Family Diabetes</Form.Label>
          <Form.Control
            as="select"
            value={familyDiabetes}
            onChange={(e) => setFamilyDiabetes(e.target.value)}
          >
            <option value="-1">Choose...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>High Blood Pressure</Form.Label>
          <Form.Control
            as="select"
            value={highBloodPressure}
            onChange={(e) => setHighBloodPressure(e.target.value)}
          >
            <option value="-1">Choose...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Physically Active</Form.Label>
          <Form.Control
            as="select"
            value={physicallyActive}
            onChange={(e) => setPhysicallyActive(e.target.value)}
          >
            <option value="-1">Choose...</option>
            <option value="less than half an hr">Less than half an hr.</option>
            <option value="more than half an hr">More than half an hr.</option>
            <option value="one hr or more">One hour or more</option>
            <option value="none">None</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Smoking</Form.Label>
          <Form.Control
            as="select"
            value={smoking}
            onChange={(e) => setSmoking(e.target.value)}
          >
            <option value="-1">Choose...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Alcohol</Form.Label>
          <Form.Control
            as="select"
            value={alcohol}
            onChange={(e) => setAlcohol(e.target.value)}
          >
            <option value="-1">Choose...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Regular Medicine</Form.Label>
          <Form.Control
            as="select"
            value={regularMedicine}
            onChange={(e) => setRegularMedicine(e.target.value)}
          >
            <option value="-1">Choose...</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Junk Food</Form.Label>
          <Form.Control
            as="select"
            value={junkFood}
            onChange={(e) => setJunkFood(e.target.value)}
          >
            <option value="-1">Choose...</option>
            <option value="occasionally">Occasionally</option>
            <option value="often">Often</option>
            <option value="very often">Very Often</option>
            <option value="always">Always</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Stress</Form.Label>
          <Form.Control
            as="select"
            value={stress}
            onChange={(e) => setStress(e.target.value)}
          >
            <option value="-1">Choose...</option>
            <option value="sometimes">Sometimes</option>
            <option value="very often">Very Often</option>
            <option value="not at all">Not at all</option>
            <option value="always">Always</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Blood Pressure Level</Form.Label>
          <Form.Control
            as="select"
            value={bloodPressureLevel}
            onChange={(e) => setBloodPressureLevel(e.target.value)}
          >
            <option value="-1">Choose...</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
            <option value="low">Low</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Prediabetes</Form.Label>
          <Form.Control
            as="select"
            value={prediabetes}
            onChange={(e) => setPrediabetes(e.target.value)}
          >
            <option value="-1">Choose...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Urination Frequency</Form.Label>
          <Form.Control
            as="select"
            value={urinationFrequency}
            onChange={(e) => setUrinationFrequency(e.target.value)}
          >
            <option value="-1">Choose...</option>
            <option value="quiten often">Quite often</option>
            <option value="not much">Not much</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Number of Pregnancies</Form.Label>
          <Form.Control
            type="number"
            placeholder="Number"
            value={pregnanciesNumber}
            onChange={(e) => setPregnanciesNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>BMI</Form.Label>
          <Form.Control
            type="float"
            placeholder="Please enter your BMI"
            value={bmi}
            onChange={(e) => {
              setBmi(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Sleep</Form.Label>
          <Form.Control
            type="text"
            placeholder="Time in hours"
            value={sleep}
            onChange={(e) => setSleep(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Sleep Sound</Form.Label>
          <Form.Control
            type="float"
            placeholder="Time in hours"
            value={sleepSound}
            onChange={(e) => setSleepSound(e.target.value)}
          />
        </Form.Group>
      </Form.Row>
      <Button disabled={!areAllFieldFilled} variant="primary" type="submit">
        Submit
      </Button>
      {alert && alert.pred === '0' ?   
      <Alert style={{marginTop:'30px', textAlign:'center'}} variant={'success'}>
      {'Result: ' + alert.pred + ', ' + alert.prob + ' -->Go to Dashboard to see your status.'}
      </Alert>
      :<></>}
      {alert && alert.pred === '1' ?   
      <Alert style={{marginTop:'30px', textAlign:'center'}} variant={'danger'}>
      {'Result: ' + alert.pred + ', ' + alert.prob + ' -->Go to Dashboard to see your status.'}
      </Alert>
      :<></>}
      
    </Form>
  );
}

export default SugarBitForm;

// import { React, useState } from "react";
// import { Form, Button, Col } from "react-bootstrap";
// import { sentData } from "../lip/api";
// //age (>40, 40-49,50-59,60<),
// //gender(male, female),
// //familyDiabetes (yes,no),
// //highBloodPressure(yes, no),
// //physicallyActive(yes, no),
// //smoking(yes, no),
// //alcohol(yes, no),
// //regularMedicine(yes, no),
// //junkFood (ocasionally,often, veryoften,always),
// //stress,(sometimes, veryoften, not at all, always),
// //bloodPressureLevel(normal,high,low)
// //prediabetes(yes, no),
// //urinationFrequency, (not much, quite often)
// //pregnanciesNumber (int)
// //bmi (float)
// //sleep (hours of sleep)
// //sleepSound (hours of sleepSound)

// function SugarBitForm() {
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const [familyDiabetes, setFamilyDiabetes] = useState("");
//   const [highBloodPressure, setHighBloodPressure] = useState("");
//   const [physicallyActive, setPhysicallyActive] = useState("");
//   const [smoking, setSmoking] = useState("");
//   const [alcohol, setAlcohol] = useState("");
//   const [regularMedicine, setRegularMedicine] = useState("");
//   const [junkFood, setJunkFood] = useState("");
//   const [stress, setStress] = useState("");
//   const [bloodPressureLevel, setBloodPressureLevel] = useState("");
//   const [prediabetes, setPrediabetes] = useState();
//   const [urinationFrequency, setUrinationFrequency] = useState();
//   const [pregnanciesNumber, setPregnanciesNumber] = useState();
//   const [bmi, setBmi] = useState();
//   const [sleep, setSleep] = useState();
//   const [sleepSound, setSleepSound] = useState();
//   const [areAllFieldFilled, setAreAllFieldFilled] = useState(false);

//   //   if (
//   //     age &&
//   //     gender &&
//   //     familyDiabetes &&
//   //     highBloodPressure &&
//   //     physicallyActive &&
//   //     smoking &&
//   //     alcohol &&
//   //     regularMedicine &&
//   //     junkFood &&
//   //     stress &&
//   //     bloodPressureLevel &&
//   //     prediabetes &&
//   //     urinationFrequency &&
//   //     urinationFrequency &&
//   //     pregnanciesNumber &&
//   //     bmi &&
//   //     sleep &&
//   //     sleepSound
//   //   ) {
//   //     setAreAllFieldFilled(true);
//   //   } else {
//   //     setAreAllFieldFilled(false);
//   //   }

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     const allFormData = {
//       Age: age,
//       Gender: gender,
//       Family_Diabetes: familyDiabetes,
//       highBP: highBloodPressure,
//       PhysicallyActive: physicallyActive,
//       Smoking: smoking,
//       Alcohol: alcohol,
//       RegularMedicine: regularMedicine,
//       JunkFood: junkFood,
//       Stress: stress,
//       BPLevel: bloodPressureLevel,
//       Pdiabetes: prediabetes,
//       UriationFreq: urinationFrequency,
//       Pregnancies: pregnanciesNumber,
//       BMI: bmi,
//       Sleep: sleep,
//       SoundSleep: sleepSound,
//     };
//     const formDataJson = JSON.stringify(allFormData);
//     console.log(formDataJson);
//     const sentDataResult = await sentData(formDataJson);
//     console.log("sentDataResult :>> ", sentDataResult);
//   };

//   return (
//     <Form id="heathForm" onSubmit={handleFormSubmit}>
//       <Form.Row>
//         <Form.Group as={Col}>
//           <Form.Label>Age</Form.Label>
//           <Form.Control
//             as="select"
//             defaultValue="Choose..."
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//           >
//             <option value="-1">Choose...</option>
//             <option value="less than 40">less than 40</option>
//             <option value="40-49">40-49</option>
//             <option value="50-59">50-59</option>
//             <option value="60 or older">60 or older </option>
//           </Form.Control>
//         </Form.Group>
//         <Form.Group as={Col}>
//           <Form.Label>Gender</Form.Label>
//           <Form.Control
//             as="select"
//             defaultValue="Choose..."
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//           >
//             <option value="-1">Choose...</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </Form.Control>
//         </Form.Group>
//         <Form.Group as={Col}>
//           <Form.Label>Family Diabetes</Form.Label>
//           <Form.Control
//             as="select"
//             defaultValue="Choose..."
//             value={familyDiabetes}
//             onChange={(e) => setFamilyDiabetes(e.target.value)}
//           >
//             <option value="-1">Choose...</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </Form.Control>
//         </Form.Group>
//         <Form.Group as={Col}>
//           <Form.Label>High Blood Pressure</Form.Label>
//           <Form.Control
//             as="select"
//             defaultValue="Choose..."
//             value={highBloodPressure}
//             onChange={(e) => setHighBloodPressure(e.target.value)}
//           >
//             <option value="-1">Choose...</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </Form.Control>
//         </Form.Group>
//       </Form.Row>
//       <Form.Row>
//         <Form.Group as={Col}>
//           <Form.Label>Physically Active</Form.Label>
//           <Form.Control
//             as="select"
//             defaultValue="Choose..."
//             value={physicallyActive}
//             onChange={(e) => setPhysicallyActive(e.target.value)}
//           >
//             <option value="-1">Choose...</option>
//             <option value="less than half an hr">Less than half an hr.</option>
//             <option value="more than half an hr">More than half an hr.</option>
//             <option value="one hr or more">One hour or more</option>
//             <option value="none">None</option>
//           </Form.Control>
//         </Form.Group>
//         <Form.Group as={Col}>
//           <Form.Label>Smoking</Form.Label>
//           <Form.Control
//             as="select"
//             defaultValue="Choose..."
//             value={smoking}
//             onChange={(e) => setSmoking(e.target.value)}
//           >
//             <option value="-1">Choose...</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </Form.Control>
//         </Form.Group>
//         <Form.Group as={Col}>
//           <Form.Label>Alcohol</Form.Label>
//           <Form.Control
//             as="select"
//             defaultValue="Choose..."
//             value={alcohol}
//             onChange={(e) => setAlcohol(e.target.value)}
//           >
//             <option value="-1">Choose...</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </Form.Control>
//         </Form.Group>
//         <Form.Group as={Col}>
//           <Form.Label>Regular Medicine</Form.Label>
//           <Form.Control
//             as="select"
//             defaultValue="Choose..."
//             value={regularMedicine}
//             onChange={(e) => setRegularMedicine(e.target.value)}
//           >
//             <option value="-1">Choose...</option>
//             <option value="1">Yes</option>
//             <option value="0">No</option>
//           </Form.Control>
//         </Form.Group>
//       </Form.Row>
//       <Form.Row>
//         <Form.Group as={Col}>
//           <Form.Label>Junk Food</Form.Label>
//           <Form.Control
//             as="select"
//             defaultValue="Choose..."
//             value={junkFood}
//             onChange={(e) => setJunkFood(e.target.value)}
//           >
//             <option value="-1">Choose...</option>
//             <option value="occasionally">Occasionally</option>
//             <option value="often">Often</option>
//             <option value="very often">Very Often</option>
//             <option value="always">Always</option>
//           </Form.Control>
//         </Form.Group>
//         <Form.Group as={Col}>
//           <Form.Label>Stress</Form.Label>
//           <Form.Control
//             as="select"
//             defaultValue="Choose..."
//             value={stress}
//             onChange={(e) => setStress(e.target.value)}
//           >
//             <option value="-1">Choose...</option>
//             <option value="sometimes">Sometimes</option>
//             <option value="very often">Very Often</option>
//             <option value="not at all">Not at all</option>
//             <option value="always">Always</option>
//           </Form.Control>
//         </Form.Group>
//         <Form.Group as={Col}>
//           <Form.Label>Blood Pressure Level</Form.Label>
//           <Form.Control
//             as="select"
//             defaultValue="Choose..."
//             value={bloodPressureLevel}
//             onChange={(e) => setBloodPressureLevel(e.target.value)}
//           >
//             <option value="-1">Choose...</option>
//             <option value="normal">Normal</option>
//             <option value="high">High</option>
//             <option value="low">Low</option>
//           </Form.Control>
//         </Form.Group>
//         <Form.Group as={Col}>
//           <Form.Label>Prediabetes</Form.Label>
//           <Form.Control
//             as="select"
//             defaultValue="Choose..."
//             value={prediabetes}
//             onChange={(e) => setPrediabetes(e.target.value)}
//           >
//             <option value="-1">Choose...</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </Form.Control>
//         </Form.Group>
//         <Form.Group as={Col}>
//           <Form.Label>Urination Frequency</Form.Label>
//           <Form.Control
//             as="select"
//             defaultValue="Choose..."
//             value={urinationFrequency}
//             onChange={(e) => setUrinationFrequency(e.target.value)}
//           >
//             <option value="-1">Choose...</option>
//             <option value="quiten often">Quite often</option>
//             <option value="not much">Not much</option>
//           </Form.Control>
//         </Form.Group>
//       </Form.Row>
//       <Form.Row>
//         <Form.Group as={Col}>
//           <Form.Label>Number of Pregnancies</Form.Label>
//           <Form.Control
//             type="number"
//             placeholder="Number"
//             value={pregnanciesNumber}
//             onChange={(e) => setPregnanciesNumber(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group as={Col}>
//           <Form.Label>BMI</Form.Label>
//           <Form.Control
//             type="float"
//             placeholder="Please enter your BMI"
//             value={bmi}
//             onChange={(e) => setBmi(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group as={Col}>
//           <Form.Label>Sleep</Form.Label>
//           <Form.Control
//             type="float"
//             placeholder="Time in hours"
//             value={sleep}
//             onChange={(e) => setSleep(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group as={Col}>
//           <Form.Label>Sleep Sound</Form.Label>
//           <Form.Control
//             type="float"
//             placeholder="Time in hours"
//             value={sleepSound}
//             onChange={(e) => setSleepSound(e.target.value)}
//           />
//         </Form.Group>
//       </Form.Row>
//       <Button disabled={!areAllFieldFilled} variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default SugarBitForm;
