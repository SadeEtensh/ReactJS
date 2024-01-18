import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./comps/Card";
import Button from "./Button/Button";
import Student from "./comps/Student";
import UserGreeting from "./comps/UserGreeting";
function App() {
  return (
    <>
      {/* <Card /> */}
      {/* <Button />
      <Student name="Sadeee" age={30} isStudent={true} />
      <Student name="Hello" age={30} isStudent={false} />
      <Student /> */}
      <UserGreeting isLoggedIn={true} userName="Sade" />
    </>
  );
}

export default App;
