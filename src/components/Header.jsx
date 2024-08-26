import { Link } from "react-router-dom";
import Logo from "../assets/images.png";

function Header() {
  return (
    <div>
      <div className="flex justify-between px-10">
        <Link to="/">
          <img
            src={Logo}
            alt="Enquiry Logo"
            style={{ height: "70px", width: "70px" }}
            className="rounded-full bg-slate-700"
          />
        </Link>

        <h1 className="mt-5 text-4xl text-white ml-8">Enquiry</h1>
        <div className="mt-6 text-xl text-white">
          <Link className="hover:underline" to="http://localhost:3001/">
            Post
          </Link>
          <span> | </span>
          <Link className="hover:underline" to="http://localhost:3001/lists">
            Update & Delete
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
