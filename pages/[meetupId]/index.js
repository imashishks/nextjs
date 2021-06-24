import { useRouter } from "next/router";
import { Fragment } from "react";
const MeetupDetailsPage = () => {
  return (
    <Fragment>
      <img src="https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801__480.jpg" />
      <h1>Dummy title</h1>
      <address> Kuch bhi generic address</address>
      <p>DEscription goes here</p>
    </Fragment>
  );
};
export default MeetupDetailsPage;
