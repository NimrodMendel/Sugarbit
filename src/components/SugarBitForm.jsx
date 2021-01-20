import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

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
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Age</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option value="-1">Choose...</option>
                        <option value="lessThan40">less than 40</option>
                        <option value="40-49">40-49</option>
                        <option value="50-59">50-59</option>
                        <option value="60OrOlder">60 or older </option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option value="-1">Choose...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Family Diabetes</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option value="-1">Choose...</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>High Blood Pressure</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option value="-1">Choose...</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Physically Active</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option value="-1">Choose...</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Smoking</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option value="-1">Choose...</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Alcohol</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option value="-1">Choose...</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Regular Medicine</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option value="-1">Choose...</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Junk Food</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option value="-1">Choose...</option>
                        <option value="0">Occasionally</option>
                        <option value="1">Often</option>
                        <option value="2">Very Often</option>
                        <option value="3">Always</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Stress</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option value="-1">Choose...</option>
                        <option value="0">Sometimes</option>
                        <option value="1">Very Often</option>
                        <option value="2">Not at all</option>
                        <option value="3">Always</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Blood Pressure</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option value="-1">Choose...</option>
                        <option value="0">Normal</option>
                        <option value="1">High</option>
                        <option value="2">Low</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Prediabetes</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option value="-1">Choose...</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Urination Frequency</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option value="-1">Choose...</option>
                        <option value="1">Quite often</option>
                        <option value="0">Not much</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Number of Pregnancies</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Number"
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>BMI</Form.Label>
                    <Form.Control
                        type="float"
                        placeholder="Please enter your BMI"
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Sleep</Form.Label>
                    <Form.Control
                        type="float"
                        placeholder="Time in hours"
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Sleep Sound</Form.Label>
                    <Form.Control
                        type="float"
                        placeholder="Time in hours"
                    />
                </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default SugarBitForm


