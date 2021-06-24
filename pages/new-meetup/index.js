import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetupPage = () => {
  const meetupHandler = (enteredData) => {
    console.log(enteredData);
  };
  return <NewMeetupForm onAddMeetup={meetupHandler} />;
};

export default NewMeetupPage;
