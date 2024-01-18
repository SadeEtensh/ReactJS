import PropTypes from "prop-types";

export default function UserGreeting(props) {
  //   if (props.isLoggedIn) {
  //     return <h2>Welcome {props.userName}</h2>;
  //   } else {
  //     return <h2>Please log in to continue</h2>;
  //   }

  // The same as above
  //   return props.isLoggedIn ? (
  //     <h2>Welcome, {props.userName}</h2>
  //   ) : (
  //     <h2>Please log in to continue</h2>
  //   );

  //The same as above

  const WelcomeMessage = <h2>Welcome, {props.userName}</h2>;
  const LoginPropt = <h2>Please log in to continue</h2>;
  return props.isLoggedIn ? WelcomeMessage : LoginPropt;
}

//propTypes
UserGreeting.propType = {
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string,
};
UserGreeting.defaultProps = {
  isLoggedIn: false,
  userName: "Guest",
};
