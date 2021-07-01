import classes from "./meetupDetail.module.css";
import Image from 'next/image'
const MeetupDetailsPage = () => {
  return (
    <section className={classes.details}>
      <Image src="https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801__480.jpg" alt="meetup-detail image" />
      <h1>Dummy title</h1>
      <address> Kuch bhi generic address</address>
      <p>DEscription goes here</p>
    </section>
  );
};
export default MeetupDetailsPage;
