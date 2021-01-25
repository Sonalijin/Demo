const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
const validationInfo = ({ email, password, confirmPassword } = {}) => {
  let errors = {};
  let hasError = false;
  if (!email) {
    errors.email = "Email required";
    hasError = true;
  } else if (!validateEmail(email)) {
    errors.email = "Email address is invalid";
    hasError = true;
  }
  if (!password) {
    errors.password = "Password required";
    hasError = true;
  } else if (password.length < 6) {
    errors.password = "Password needs to be 6 characters";
    hasError = true;
  }
  if (!confirmPassword) {
    errors.password = "Password required";
    hasError = true;
  } else if (confirmPassword !== password) {
    errors.confirmPassword = "Password miss match";
    hasError = true;
  }

  return { errors, hasError };
};
export default validationInfo;
