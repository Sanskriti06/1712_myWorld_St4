// import "./SignUpDetails.css";
import './StudentDetails.css';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import cupcake6 from "../Assets/cupcake6.jpg";
import './StudentDetails.css'

const SignUpDetails = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");

  let history = useNavigate();

  const postData = () => {
    console.log(firstname, lastname, email, username);
    axios
      .post("http://localhost:5000/data", {
        firstname,
        lastname,
        email,
        username,
      })
      .then(() => {
        alert("data saved successfully");
        history("/read");
      });
    // alert("data saved successfully");
  };

  return (
    <>
      <div className="container2" style={{backgroundImage: `url(${cupcake6})`}}>
        <br></br>
        <form className='frm'>
          <div className="rowww form-group">
            <div className="col-25">
              <label className="signlabel">First Name</label>
              <br/>
            </div>
            <div className="col-75">
              <input
               className="form-control"
                type="text"
                placeholder="Your first name.."
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="rowww">
            <div className="col-25">
              <label className="signlabel">Last Name</label>
              <br/>
            </div>
            <div className="col-75">
              <input
              className="form-control"
                type="text"
                placeholder="Your last name.."
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="rowww">
            <div className="col-25">
              <label className="signlabel">Email</label>
              <br/>
            </div>
            <div className="col-75">
              <input
              className="form-control"
                type="email"
                placeholder="Your email.."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="rowww">
            <div className="col-25">
              <label className="signlabel">Create new Username</label>
              <br/>
            </div>
            <div className="col-75">
              <input
              className="form-control"
                type="text"
                placeholder="Your username.."
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div className="rowww">
            <div className="col-25">
              <label className="signlabel">Enter Password</label>
              <br/>
            </div>
            <div className="col-75">
              <input className="form-control" type="password" placeholder="Enter password.." />
            </div>
          </div>
          <div className="rowww">
            <div className="col-25">
              <label className="signlabel">Confirm Password</label>
              <br/>
            </div>
            <div className="col-75">
              <input className="form-control" type="password" placeholder="Confirm password.." />
            </div>
          </div>
          <br />
          <div className="rowww">
            <input type="reset" value="Clear" className="btn btn-primary" id='btttn'
            style={{margin:"10px"}}
            />
            <input
            className="btn btn-primary"
            id='btttn'
              type="button"
              value="Submit"
              onClick={postData}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpDetails;
