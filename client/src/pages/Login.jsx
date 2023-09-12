import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm";

// Pass users array to the List component as a prop
export default function Login() {
  return (
    <div>
        <LoginHeader />
        <LoginForm />
    </div>
  );
}
