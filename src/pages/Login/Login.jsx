import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="h-full border mt-32 py-10 px-28 rounded-lg">
        <form onSubmit={handleLogin} className="card-body">
          <h2 className="font-bold text-2xl">Login</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="jamu@na.com"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="123456S"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover text-red-500 font-medium text-base"
              >
                Forgot password?
              </a>
            </label>
          </div>
          {/* {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          {success && <p className="text-green-600">{success}</p>} */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-error bg-red-500 text-white"
            >
              Login
            </button>
          </div>
        </form>

        <h5 className="text-base font-medium text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-red-500">
            Create an account
          </Link>
        </h5>
      </div>
      <div>
        <div className="flex items-center justify-center w-full my-7">
          <div className="w-1/3 h-px bg-gray-300"></div>
          <span className="px-4 text-xl font-semibold">Or</span>
          <div className="w-1/3 h-px bg-gray-300"></div>
        </div>

        <div className="flex justify-center gap-4 border border-gray-300 w-1/3 mx-auto p-4 mb-4 rounded-full">
          <FaFacebook className="text-xl" />
          <p className="font-medium text-base">Continue with Facebook</p>
        </div>
        <div className="flex justify-center gap-4 border border-gray-300 w-1/3 mx-auto p-4 mb-12 rounded-full">
          <FaGoogle className="text-xl" />
          <button className="font-medium text-base">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
