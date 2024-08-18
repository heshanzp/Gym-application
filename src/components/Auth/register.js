import { createUserWithEmailAndPassword, signInWithPhoneNumber } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { RecaptchaVerifier } from "firebase/auth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isSubmitClick, setisSubmitClick] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [user,setUser] = useState(null)

  const handleRegister = async (e) => {
    e.preventDefault();

    setisSubmitClick(!isSubmitClick)
    setIsOtpSent(!isOtpSent)

    // console.log(isSubmitClick)

    if (!isOtpVerified) {
      toast.error("Please verify your phone number first!", { position: "top-center" });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo:"",
          phoneNumber: phone
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
      window.location.href = "/";
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  const  handleSendOtp = async (e) => {

    e.preventDefault();

    const recaptchaVerifier = new RecaptchaVerifier(auth,"recaptcha",{});

    const confirmation = await signInWithPhoneNumber(auth,phone,recaptchaVerifier)

    setUser(confirmation)

  };

  const handleOtpVerification = async(e) => {
    e.preventDefault();

    await user.confirm(otp)



    // const credential = auth.PhoneAuthProvider.credential(verificationId, otp);

    // auth.signInWithCredential(credential)
    //   .then((result) => {
    //     setIsOtpVerified(true);
    //     toast.success("Phone number verified successfully!", { position: "top-center" });
    //   })
    //   .catch((error) => {
    //     console.error("Error verifying OTP", error);
    //     toast.error("Invalid OTP. Please try again.", { position: "bottom-center" });
    //   });
  };

  const handleRegisters = async (e) => {
    e.preventDefault();
    if (!isOtpVerified) {
      toast.error("Please verify your phone number first!", { position: "top-center" });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          phone: phone,
          photo: ""
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="addUser">
      {/* <form className="addUserForm" onSubmit={handleRegister}>
      <div className="inputGroup">
          <h3>Sign Up</h3>

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
                <label>Phone Number</label>
                <PhoneInput
                  country={'us'}
                  value={phone}
                  onChange={setPhone}
                  inputStyle={{ width: '100%' }}
                  required
                />
            </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/login">Login</a>
          </p>
        </div>
      </form> */}

      {!isOtpSent && (
                <form className="addUserForm" onSubmit={handleRegister}>
                <div className="inputGroup">
                    <h3>Sign Up</h3>
          
                    <div className="mb-3">
                      <label>First name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </div>
          
                    <div className="mb-3">
                      <label>Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        onChange={(e) => setLname(e.target.value)}
                      />
                    </div>
          
                    <div className="mb-3">
                      <label>Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
          
                    <div className="mb-3">
                          <label>Phone Number</label>
                          <PhoneInput
                            country={'us'}
                            value={phone}
                            onChange={(phone)=>setPhone("+",phone)}
                            inputStyle={{ width: '100%' }}
                            required
                          />
                      </div>
          
                    <div className="mb-3">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
          
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        Sign Up
                      </button>
                    </div>
                    <p className="forgot-password text-right">
                      Already registered <a href="/login">Login</a>
                    </p>
                  </div>
                </form>
          )}

          {isSubmitClick && (
            <form onSubmit={handleSendOtp}>
              <div className="mb-3">
                <label>Phone Number</label>
                <PhoneInput
                  country={'us'}
                  value={phone}
                  onChange={(phone)=>setPhone("+",phone)}
                  inputStyle={{ width: '100%' }}
                  required
                />
              </div>
              <div id="recaptcha-container"></div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Send OTP
                </button>
              </div>
            </form>
          )}

          {isOtpSent && !isOtpVerified && (
            <form onSubmit={handleOtpVerification}>
              <div className="mb-3">
                <label>Enter OTP</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Verify OTP
                </button>
              </div>
            </form>
          )}
    </div>
  );
}
export default Register;