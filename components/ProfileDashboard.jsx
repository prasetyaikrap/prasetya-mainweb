import { useState, useRef } from "react";
import { useAuth } from "../middleware/AuthContext";
import { addProfileData } from "../pages/api/profile";
import style from "../styles/profile.module.css";

const profData = {
  profile: {
    fullname: "",
    email: "",
    biography: "",
    photoUrl: "/img/prasetya-banner-photo.png",
  },
  contact: {
    linkedin: {
      description: "",
      url: "",
      icon: "",
      isPublic: "",
    },
    github: {
      description: "",
      url: "",
      icon: "",
      isPublic: "",
    },
    instagram: {
      description: "",
      url: "",
      icon: "",
      isPublic: "",
    },
    mail: {
      description: "",
      url: "",
      icon: "",
      isPublic: "",
    },
    youtube: {
      description: "",
      url: "",
      icon: "",
      isPublic: "",
    },
    whatsapp: {
      description: "",
      url: "",
      icon: "",
      isPublic: "",
    },
  },
};

function ProfileDashboard() {
  //Public Profile
  const [profileData, setProfileData] = useState(profData);
  const { user } = useAuth();
  const {
    profile: { fullname, email, biography, photoUrl },
    contact: { linkedin, github, instagram, mail, whatsapp, youtube },
    ...rest
  } = profileData;

  //Reference for Form
  const fullnameRef = useRef();
  const emailRef = useRef();
  const bioRef = useRef();
  const photoUrlRef = useRef();
  const linkedinDescRef = useRef();
  const linkedinUrlRef = useRef();
  const linkedinIsPublicRef = useRef();
  const githubDescRef = useRef();
  const githubUrlRef = useRef();
  const githubIsPublicref = useRef();
  const instagramDescRef = useRef();
  const instagramUrlRef = useRef();
  const instagramIsPublicRef = useRef();
  const mailDescRef = useRef();
  const mailUrlRef = useRef();
  const mailIsPublicRef = useRef();
  const whatsappDescRef = useRef();
  const whatsappUrlRef = useRef();
  const whatsappIsPublicRef = useRef();
  const youtubeDescRef = useRef();
  const youtubeUrlRef = useRef();
  const youtubeIsPublicRef = useRef();

  const [PPProfileState, setPPProfileState] = useState(false);
  const [PPBtnText, setPPBtnText] = useState("Edit");
  const [PPIsDisabled, setPPIsDisabled] = useState(true);
  const [PPClassState, setPPClassState] = useState(style.inputReadOnly);
  const [PPBtnLoading, setPPBtnLoading] = useState(false);
  const [PPCancelBtn, setPPCancelBtn] = useState({ display: "none" });
  async function publicProfileHandler(e) {
    e.preventDefault();
    const buttonClick = e.target.id;
    if (buttonClick === "cancelBtn") {
      setPPBtnLoading(true);
      document.getElementById("profileForm").reset();
      setPPProfileState(false);
      setPPClassState(style.inputReadOnly);
      setPPIsDisabled(true);
      setPPBtnText("Edit");
      setPPCancelBtn({ display: "none" });
      setPPBtnLoading(false);
    }
    if (buttonClick === "editSaveBtn") {
      switch (PPProfileState) {
        case false:
          setPPBtnLoading(true);
          setPPProfileState(true);
          setPPClassState(style.inputEditMode);
          setPPIsDisabled(false);
          setPPBtnText("Save");
          setPPCancelBtn({ display: "" });
          setPPBtnLoading(false);
          break;
        case true:
          setPPBtnLoading(true);
          const newData = {
            profile: {
              fullname: fullnameRef.current.value,
              email: emailRef.current.value,
              biography: bioRef.current.value,
              photoUrl: "/img/prasetya-banner-photo.png",
            },
            contact: {
              linkedin: {
                description: linkedinDescRef.current.value,
                url: linkedinUrlRef.current.value,
                icon: "../public/icon/linkedin.svg",
                isPublic: linkedinIsPublicRef.current.value,
              },
            },
          };
          await addProfileData(user.uid, newData);
          setPPProfileState(false);
          setPPClassState(style.inputReadOnly);
          setPPIsDisabled(true);
          setPPBtnText("Edit");
          setPPCancelBtn({ display: "none" });
          setPPBtnLoading(false);
          break;
        default:
      }
    }
  }
  return (
    <div className={style.pdContainer}>
      <div className={style.profileBox}>
        <div className={style.profilePhoto}>
          <img src={photoUrl} alt={fullname} />
          <button>Change Photo</button>
        </div>
        <div className={style.pdContent}>
          <div className={style.contentSection}>
            <h2>Public Profile</h2>
            <hr />
            <form id="profileForm" className={style.publicProfileForm}>
              <h3>Profile</h3>
              <hr style={{ width: "30%" }} />
              <div className={style.inputBox2}>
                <label htmlFor="fullname">Fullname</label>
                <input
                  id="fullname"
                  type="text"
                  className={PPClassState}
                  defaultValue={fullname}
                  disabled={PPIsDisabled}
                  spellCheck={false}
                  ref={fullnameRef}
                />
              </div>
              <div className={style.inputBox2}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className={PPClassState}
                  defaultValue={email}
                  disabled={PPIsDisabled}
                  spellCheck={false}
                  ref={emailRef}
                />
              </div>
              <div className={style.inputBox1}>
                <label htmlFor="biografi">Bio</label>
                <textarea
                  id="biografi"
                  className={PPClassState}
                  rows="4"
                  defaultValue={biography}
                  disabled={PPIsDisabled}
                  spellCheck={false}
                  ref={bioRef}
                />
              </div>
              <h3>Contact</h3>
              <hr style={{ width: "30%" }} />
              <div className={`${style.inputBox1} ${style.inputBoxContact}`}>
                <span>
                  <label htmlFor="linkedinUrl">Linkedin</label>
                  <input
                    id="linkedinUrl"
                    name="linkedinUrl"
                    type="url"
                    className={PPClassState}
                    defaultValue={linkedin.url}
                    disabled={PPIsDisabled}
                    spellCheck={false}
                    ref={linkedinUrlRef}
                  />
                </span>
                <span>
                  <label htmlFor="linkedinDesc">Description</label>
                  <input
                    id="linkedinDesc"
                    name="linkedinDesc"
                    type="text"
                    className={PPClassState}
                    defaultValue={linkedin.description}
                    disabled={PPIsDisabled}
                    spellCheck={false}
                    ref={linkedinDescRef}
                  />
                </span>
                <span style={{ width: "3rem" }}>
                  <label htmlFor="linkedinPublic">Public</label>
                  <input
                    id="linkedinPublic"
                    name="linkedinPublic"
                    type="checkbox"
                    style={{
                      alignItems: "center",
                      margin: "auto",
                      height: "30%",
                    }}
                    defaultChecked={linkedin.isPublic}
                    disabled={PPIsDisabled}
                    ref={linkedinIsPublicRef}
                  />
                </span>
              </div>
              <div className={style.actionBtnContainer}>
                <button
                  id="editSaveBtn"
                  type="submit"
                  onClick={publicProfileHandler}
                  disabled={PPBtnLoading}
                >
                  {PPBtnText}
                </button>
                <button
                  id="cancelBtn"
                  onClick={publicProfileHandler}
                  disabled={PPBtnLoading}
                  style={PPCancelBtn}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div className={style.contentSection}>
            <h2>Account Settings</h2>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDashboard;
