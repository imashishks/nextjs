import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from 'react';
const MEETUP_DATA = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801__480.jpg",
    address: "Some where on earth",
    description: "Chill",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://cdn.pixabay.com/photo/2018/01/21/01/46/architecture-3095716__340.jpg",
    address: "Jumri tilaiya",
    description: "Meetup and have fun",
  },
];

const HomePage = () => {
  const [loadMeetups,setLoadMeetups] = useState([]);
  useEffect(()=>{
    setLoadMeetups(MEETUP_DATA);
  },[]);
  return <MeetupList meetups={loadMeetups} />;
};

export default HomePage;
