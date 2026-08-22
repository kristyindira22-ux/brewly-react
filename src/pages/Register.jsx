import Input from "../components/Input";
import Button from "../components/Button";

function Register() {
  return (
    <main className="login-page">
      <section className="login-card register-card">

        <h1 className="logo">BREWLY</h1>

        <div className="login-header">
          <h2 className="page-title">Create Account</h2>
          <p className="subtitle">Welcome!</p>
        </div>

        <form className="login-form register-form">

          <Input
            label="Name"
            type="text"
            placeholder="Enter name"
          />

          <Input
            label="Username"
            type="text"
            placeholder="Enter username"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            showToggle
          />

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Enter password"
            showToggle
          />

          <label className="checkbox privacy-checkbox">
            <input type="checkbox" />
            <span>I agree to the Privacy Policy</span>
          </label>

          <Button type="submit" className="btn-primary">
            Register
          </Button>

          <div className="divider">
            <span>Or</span>
          </div>

          <Button type="button" className="btn-google">
            <span className="google-icon">G</span>
            <span>Continue with Google</span>
          </Button>

          <p className="login-footer">
            Already have an account?{" "}
            <a href="/login">Login</a>
          </p>

        </form>

      </section>
    </main>
  );
}

export default Register;