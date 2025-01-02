import { useParams } from "react-router";

const Team = () => {
  const { teamId } = useParams();
  return (
    <>
      <h1>My Team ID: {teamId}</h1>
    </>
  );
};

export default Team;
