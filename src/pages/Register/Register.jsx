import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, googleLogin, gitLogin } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photoUrl = form.get("photoUrl");
    console.log(name, email, password, photoUrl);

    // Validations checkup and return
    if (password.length < 6) {
      setErrorMessage("Password should be at least 6 characters or Longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setErrorMessage("Password should have one Uppercase letter");
      return;
    }

    // reset message
    setErrorMessage("");
    setSuccess("");

    // Create User:
    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // Update profile with displayName and photoURL
        updateProfile(user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            setSuccess("User created successfully with profile updated");
            console.log(user);
            e.target.reset();
            // Navigate after login
            navigate(location?.state ? location.state : "/");
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
          });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.error(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);

        // Navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // setErrorMessage(error.message);
        // console.error(error);
      });
  };

  const handleGitLogin = () => {
    gitLogin()
      .then((result) => {
        console.log(result.user);

        // Navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // setErrorMessage(error.message);
        // console.error(error);
      });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="h-full border mt-20 py-10 px-28 rounded-lg">
        <form onSubmit={handleRegister} className="card-body">
          <h2 className="font-bold text-2xl">Create an account</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="first name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
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
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="photoURL"
              className="input input-bordered"
              required
            />
          </div>
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          {success && <p className="text-green-600">{success}</p>}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-error bg-red-500 text-white"
            >
              Create an account
            </button>
          </div>
        </form>

        <h5 className="text-base font-medium text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500">
            Login
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
          <FaGithub className="text-xl" />
          <button onClick={handleGitLogin} className="font-medium text-base">
            Continue with Github
          </button>
        </div>
        <div className="flex justify-center gap-4 border border-gray-300 w-1/3 mx-auto p-4 mb-12 rounded-full">
          <FaGoogle className="text-xl" />
          <button onClick={handleGoogleLogin} className="font-medium text-base">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
