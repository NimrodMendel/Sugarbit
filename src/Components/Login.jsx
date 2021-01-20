import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
export default function Login() {
  const [legalWaiverSigned, setLegalWaiver] = useState(false);
  const historyFunc = useHistory();

  console.log("legalWaiverSigned :>> ", legalWaiverSigned);

  const handleFormPage = () => {
    historyFunc.push("/InputPage");
  };

  return (
    <>
      <Card
        bg="secondary"
        className="d-flex justify-content-center mx-auto mt-4 "
        style={{ maxWidth: "1200px" }}
      >
        <Card.Title>
          <h1>welcome to SugarBit</h1>
        </Card.Title>
        <Card.Body className="d-flex flex-column justify-content-between p-2">
          <div className="d-flex flex-column justify-content-between">
            <p className="card-text">
              Approximately 88 million American adults—more than 1 in 3—have
              prediabetes. Of those with prediabetes, more than 84% don’t know
              they have it. Prediabetes puts you at increased risk of developing
              type 2 diabetes. Also, one quarter of Americans already have
              developed diabetes 2 and don't realize it.
            </p>
            <p>
              SugarBit is here to help you identify whether you have a higher
              risk to develop or could already have developed diabetes type 2
              and guide you through this proses
            </p>
          </div>
          <div>
            <h4>Terms of service</h4>
            <p>
              By clicking on this button you agree to the use of the "Sugar
              Beat" application in accordance with the regulations. The
              application is intended to provide a general probability regarding
              the chance of developing type 2 diabetes and is not a substitute
              for personal medical advice. For any problem or question, please
              contact your attending physician.
            </p>
            <div className="d-flex justify-content-between m-5">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I approve the Terms of service"
                  checked={legalWaiverSigned}
                  value={legalWaiverSigned}
                  onChange={(e) => setLegalWaiver(e.target.checked)}
                />
              </Form.Group>
            </div>
            <Button
              variant="success"
              disabled={!legalWaiverSigned}
              onClick={handleFormPage}
            >
              lets get started{" "}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
