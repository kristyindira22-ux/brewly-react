import Input from "../components/Input";
import Button from "../components/Button";

function Login() {
  return (
    <main className="login-page">

      <section className="login-card">

        <h1 className="logo">BREWLY</h1>

        <div className="login-header">
          <h2 className="page-title">Login</h2>
          <p className="subtitle">Welcome Back!</p>
        </div>

        <form className="login-form">

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            icon="bi-envelope"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            icon="bi-lock"
            showToggle
          />

          <div className="form-options">

            <label className="checkbox">
              <input type="checkbox" />
              <span>Remember Me</span>
            </label>

            <a href="#" className="forgot-password">
              Forgot Password?
            </a>

          </div>

          <Button type="submit" className="btn-primary">
            Login
          </Button>

          <div className="divider">
            <span>OR</span>
          </div>

          <Button type="button" className="btn-google">
            <i className="bi bi-google"></i>
            <span>Continue with Google</span>
          </Button>

          <p className="login-footer">
            Don't have an account?{" "}
            <a href="/register">Register</a>
          </p>

        </form>

      </section>

    </main>
  );
}

export default Login;