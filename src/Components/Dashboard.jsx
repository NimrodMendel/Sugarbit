import React from "react";
import { Alert, ProgressBar } from "react-bootstrap";
import TopNavbar from "./TopNavbar";
import { useGlobal } from 'reactn';

export default function Dashboard() {
  ////////////////////////////////////
  const [global, setGlobal] = useGlobal()
  const mockData = global;
  const mockDataToJson = JSON.stringify(mockData);
  ////////////////////////////////////
  const results = JSON.parse(mockDataToJson);
  const probability = parseFloat(results.prob).toFixed(2) * 100;

  return (
    <>
      <TopNavbar />
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
