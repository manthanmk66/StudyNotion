
import loginImg from "../assets/login.png";
import Template from "../components/Template";

function Login({ setisloggedin }) {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formtype="login"
      setisloggedin={setisloggedin}
    />
     
  );
}

export default Login;
