import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Col, Alert } from "react-bootstrap";
import { sentData } from "../lib/api";
import { useGlobal } from 'reactn';

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
  const [prediabetes, setPrediabetes] = useState("");
  const [urinationFrequency, setUrinationFrequency] = useState("");
  const [pregnanciesNumber, setPregnanciesNumber] = useState();
  const [bmi, setBmi] = useState();
  const [sleep, setSleep] = useState();
  const [sleepSound, setSleepSound] = useState();
  const [alert, setAlert] = useState();
  const [global, setGlobal] = useGlobal()

  const history = useHistory();

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
    setGlobal(sentDataResult);
    setAlert(sentDataResult);
    history.push("/dashboard")
  };

  return (

    <Form className="m-4" id="heathForm" onSubmit={handleFormSubmit}>
      <Form.Row>
        <Form.Group className="m-1 p-1" as={Col}>
          <Form.Label>Age</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Choose..."
            value={age}
            onChange={(e) => setAge(e.target.value)}
          >
            <option value="-1">Choose...</option>
            <option value="less than 40">less than 40</option>
            <option value="40-49">40-49</option>
            <option value="50-59">50-59</option>
            <option value="60 or older">60 or older </option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="m-1 p-1" as={Col}>
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Choose..."
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="-1">Choose...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="m-1 p-1" as={Col}>
          <Form.Label>Family Diabetes</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Choose..."
            value={familyDiabetes}
            onChange={(e) => setFamilyDiabetes(e.target.value)}
          >
            <option value="-1">Choose...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="m-1 p-1" as={Col}>
          <Form.Label>High Blood Pressure</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Choose..."
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
        <Form.Group className="m-1 p-1" as={Col}>
          <Form.Label>Physically Active</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Choose..."
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
        <Form.Group className="m-1 p-1" as={Col}>
          <Form.Label>Smoking</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Choose..."
            value={smoking}
            onChange={(e) => setSmoking(e.target.value)}
          >
            <option value="-1">Choose...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="m-1 p-1" as={Col}>
          <Form.Label>Alcohol</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Choose..."
            value={alcohol}
            onChange={(e) => setAlcohol(e.target.value)}
          >
            <option value="-1">Choose...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="m-1 p-1" as={Col}>
          <Form.Label>Regular Medicine</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Choose..."
            value={regularMedicine}
            onChange={(e) => setRegularMedicine(e.target.value)}
          >
            <option value="-1">Choose...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group className="m-1 p-1" as={Col}>
          <Form.Label>Junk Food</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Choose..."
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
        <Form.Group className="m-1 p-1" as={Col}>
          <Form.Label>Stress</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Choose..."
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
        <Form.Group className="m-1 p-1" as={Col}>
          <Form.Label>Blood Pressure Level</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Choose..."
            value={bloodPressureLevel}
            onChange={(e) => setBloodPressureLevel(e.target.value)}
          >
            <option value="-1">Choose...</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
            <option value="low">Low</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="m-1 p-1" as={Col}>
          <Form.Label>Prediabetes</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Choose..."
            value={prediabetes}
            onChange={(e) => setPrediabetes(e.target.value)}
          >
            <option value="-1">Choose...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="m-1 p-1" as={Col}>
          <Form.Label>Urination Frequency</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Choose..."
            value={urinationFrequency}
            onChange={(e) => setUrinationFrequency(e.target.value)}
          >
            <option value="-1">Choose...</option>
            <option value="quite often">Quite often</option>
            <option value="not much">Not much</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group className="m-1 p-1" as={Col}>
          <Form.Label>Number of Pregnancies</Form.Label>
          <Form.Control
            type="number"
            placeholder="Number"
            value={pregnanciesNumber}
            onChange={(e) => setPregnanciesNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="m-1 p-1" as={Col}>
          <Form.Label>BMI</Form.Label>
          <Form.Control
            type="float"
            placeholder="Please enter your BMI"
            value={bmi}
            onChange={(e) => setBmi(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="m-1 p-1" as={Col}>
          <Form.Label>Sleep</Form.Label>
          <Form.Control
            type="float"
            placeholder="Time in hours"
            value={sleep}
            onChange={(e) => setSleep(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="m-1 p-1" as={Col}>
          <Form.Label>Sleep Sound</Form.Label>
          <Form.Control
            type="float"
            placeholder="Time in hours"
            value={sleepSound}
            onChange={(e) => setSleepSound(e.target.value)}
          />
        </Form.Group>
      </Form.Row>
      <Button className="mt-4 centered" variant="warning" type="submit">
        Submit
      </Button>
      {alert && alert.pred === '0' ?
        <Alert style={{ marginTop: '30px', textAlign: 'center' }} variant={'success'}>
          {'Result: ' + alert.pred + ', ' + alert.prob + ' -->Go to Dashboard to see your status.'}
        </Alert>
        : <></>}
      {alert && alert.pred === '1' ?
        <Alert style={{ marginTop: '30px', textAlign: 'center' }} variant={'danger'}>
          {'Result: ' + alert.pred + ', ' + alert.prob + ' -->Go to Dashboard to see your status.'}
        </Alert>
        : <></>}

    </Form>
  );
}

export default SugarBitForm;







