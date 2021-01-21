import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Col, Alert, ProgressBar } from "react-bootstrap";
import { sentData } from "../lib/api";
import { useGlobal } from "reactn";

function SugarBitForm() {
  const [age, setAge] = useState("less than 40");
  const [gender, setGender] = useState("Male");
  const [familyDiabetes, setFamilyDiabetes] = useState("no");
  const [highBloodPressure, setHighBloodPressure] = useState("no");
  const [physicallyActive, setPhysicallyActive] = useState("one hr or more");
  const [smoking, setSmoking] = useState("no");
  const [alcohol, setAlcohol] = useState("no");
  const [regularMedicine, setRegularMedicine] = useState("no");
  const [junkFood, setJunkFood] = useState("occasionally");
  const [stress, setStress] = useState("not at all");
  const [bloodPressureLevel, setBloodPressureLevel] = useState("normal");
  const [prediabetes, setPrediabetes] = useState("no");
  const [urinationFrequency, setUrinationFrequency] = useState("not much");
  const [pregnanciesNumber, setPregnanciesNumber] = useState(0);
  const [bmi, setBmi] = useState(21);
  const [sleep, setSleep] = useState(7);
  const [sleepSound, setSleepSound] = useState(7);
  const [alert, setAlert] = useState();
  const [global, setGlobal] = useGlobal();

  const mockData = global;
  const mockDataToJson = JSON.stringify(mockData);
  const results = JSON.parse(mockDataToJson);
  const probability = parseFloat(results.prob).toFixed(2) * 100;

  const history = useHistory();

  let testData = {
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

  const onChangeData = async (object) => {
    const sentDataResult = await sentData(object);
    setGlobal(sentDataResult);
    setAlert(sentDataResult);
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
    setGlobal(sentDataResult);
    setAlert(sentDataResult);
    // history.push("/dashboard");
  };

  return (
    <>
      <Form className="m-4" id="heathForm" onSubmit={handleFormSubmit}>
        <Form.Row>
          <Form.Group className="m-1 p-1" as={Col}>
            <Form.Label>Age</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              value={age}
              onChange={async (e) => {
                await setAge(e.target.value);
                onChangeData(testData);
              }}
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
              onChange={async (e) => {
                await setGender(e.target.value);
                onChangeData(testData);
              }}
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
              onChange={async (e) => {
                await setFamilyDiabetes(e.target.value);
                onChangeData(testData);
              }}
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
              onChange={async (e) => {
                await setHighBloodPressure(e.target.value);
                onChangeData(testData);
              }}
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
              onChange={async (e) => {
                await setPhysicallyActive(e.target.value);
                onChangeData(testData);
              }}
            >
              <option value="-1">Choose...</option>
              <option value="less than half an hr">
                Less than half an hr.
              </option>
              <option value="more than half an hr">
                More than half an hr.
              </option>
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
              onChange={async (e) => {
                await setSmoking(e.target.value);
                onChangeData(testData);
              }}
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
              onChange={async (e) => {
                await setAlcohol(e.target.value);
                onChangeData(testData);
              }}
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
              onChange={async (e) => {
                await setRegularMedicine(e.target.value);
                onChangeData(testData);
              }}
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
              onChange={async (e) => {
                await setJunkFood(e.target.value);
                onChangeData(testData);
              }}
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
              onChange={async (e) => {
                await setStress(e.target.value);
                onChangeData(testData);
              }}
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
              onChange={async (e) => {
                await setBloodPressureLevel(e.target.value);
                onChangeData(testData);
              }}
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
              onChange={async (e) => {
                await setPrediabetes(e.target.value);
                onChangeData(testData);
              }}
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
              onChange={async (e) => {
                await setUrinationFrequency(e.target.value);
                onChangeData(testData);
              }}
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
              onChange={async (e) => {
                await setPregnanciesNumber(e.target.value);
                onChangeData(testData);
              }}
            />
          </Form.Group>
          <Form.Group className="m-1 p-1" as={Col}>
            <Form.Label>BMI</Form.Label>
            <Form.Control
              type="float"
              placeholder="Please enter your BMI"
              value={bmi}
              onChange={async (e) => {
                await setBmi(e.target.value);
                onChangeData(testData);
              }}
            />
          </Form.Group>
          <Form.Group className="m-1 p-1" as={Col}>
            <Form.Label>Sleep</Form.Label>
            <Form.Control
              type="float"
              placeholder="Time in hours"
              value={sleep}
              onChange={async (e) => {
                await setSleep(e.target.value);
                onChangeData(testData);
              }}
            />
          </Form.Group>
          <Form.Group className="m-1 p-1" as={Col}>
            <Form.Label>Sleep Sound</Form.Label>
            <Form.Control
              type="float"
              placeholder="Time in hours"
              value={sleepSound}
              onChange={async (e) => {
                await setSleepSound(e.target.value);
                onChangeData(testData);
              }}
            />
          </Form.Group>
        </Form.Row>
        {/* <Button className="mt-4 centered" variant="warning" type="submit">
          Submit
        </Button> */}
        {/* {alert && alert.pred === "0" ? (
          <Alert
            style={{ marginTop: "30px", textAlign: "center" }}
            variant={"success"}
          >
            {"Result: " +
              alert.pred +
              ", " +
              alert.prob +
              " -->Go to Dashboard to see your status."}
          </Alert>
        ) : (
          <></>
        )} */}
        {alert && alert.pred === "1" ? (
          <Alert
            style={{ marginTop: "30px", textAlign: "center" }}
            variant={"danger"}
          >
            {"Result: " +
              alert.pred +
              ", " +
              alert.prob +
              " -->Go to Dashboard to see your status."}
          </Alert>
        ) : (
          <></>
        )}
      </Form>

      <div className="m-4" id="dashboard">
        <h3>Risk Probability</h3>
        {probability >= 70 ? (
          <ProgressBar
            variant="danger"
            now={probability}
            label={`${probability}%`}
          />
        ) : probability < 70 && probability >= 50 ? (
          <ProgressBar
            variant="warning"
            now={probability}
            label={`${probability}%`}
          />
        ) : (
          <ProgressBar
            variant="success"
            now={probability}
            label={`${probability}%`}
          />
        )}
        <hr />
        {results.pred === "1" ? (
          <Alert variant="danger">
            <Alert.Heading>Please contact a doctor.</Alert.Heading>
            <hr />
            <p className="mb-0">
              You have high risk of developing type 2 diabetes.
            </p>
          </Alert>
        ) : (
          <Alert variant="success">
            <Alert.Heading>Keep going !</Alert.Heading>
            <hr />
            <p className="mb-0">
              You don't have high risk of developing type 2 diabetes.
            </p>
          </Alert>
        )}
      </div>
    </>
  );
}

export default SugarBitForm;
