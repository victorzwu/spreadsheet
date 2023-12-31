import { Badge } from "react-bootstrap";

/**
 * The status component is a simple component that displays the status of the calculator.
 *
 * The status is determined by a string that is passed in as a prop.
 */

interface StatusProps {
  statusString: string;
} // interface StatusProps

// function to split statusString into an array of strings
const splitStatusString = (statusString: string): string[] => {
  let result = statusString.split(":");
  result[0] = result[0].replace(/\b\w/g, (char) => char.toUpperCase());
  return result;
};

const Status: React.FC<StatusProps> = ({ statusString }) => {
  return (
    <p>
      <b>{splitStatusString(statusString)[0]}: </b>
      <Badge bg="info" style={{ color: "black", fontSize: "1.1rem" }}>
        {splitStatusString(statusString)[1]}
      </Badge>
    </p>
  );
};

export default Status;
