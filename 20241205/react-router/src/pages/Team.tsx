import { useParams } from "react-router";

export default function Team() {
  const { teamId } = useParams();
  return <div>Team : {teamId}</div>;
}
