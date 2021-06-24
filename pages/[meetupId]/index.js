import { useRouter } from "next/router";

const MeetupDetailsPage = () => {
  const router = useRouter();
  return <div>{router.query.meetupId}</div>;
};
export default MeetupDetailsPage;
