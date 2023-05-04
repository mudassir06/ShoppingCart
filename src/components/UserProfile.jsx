import React from "react";
import "./UserProfile.css";
import personalDetail from "../assets/ProfilePic1.svg";
import userAddress from "../assets/Group1.png";
import legalInfo from "../assets/Group2.png";
import pNotification from "../assets/GroupN.png";
import CPimg from "../assets/GroupCP.png";
import bDImg from "../assets/Group33.png";
import wiImg from "../assets/GroupW.png";

const UserProfile = () => {
  return (
    <>
      <div className="userProfile">
        <div className="userDetails">
          <div className="personalDetail">
            <img className="personalDetailImg" src={personalDetail} alt="" />
            <span className="personSpan">Personal Details</span>
          </div>
          <div className="userAddress">
            <img className="addressImg" src={userAddress} alt="" />
            <span className="addressSpan">Address</span>
          </div>
          <div className="legalInfo">
            <img className="legalInfoImg" src={legalInfo} alt="" />
            <span className="legalInfoSpan"> Legal Information</span>
          </div>
          <div className="pNotification">
            <img className="notificationImg" src={pNotification} alt="" />
            <span className="notificationSpan"> Notifications</span>
          </div>
          <div className="changePassword">
            <img className="cPImg" src={CPimg} alt="" />
            <span className="cPSpan">Change Password</span>
          </div>
          <div className="bankDetails">
            <img className="bDImg" src={bDImg} alt="" />
            <span className="bDSpan">Bank Details</span>
          </div>
          <div className="walletInfo">
            <img className="wiImg" src={wiImg} alt="" />
            <span className="wiSpan">Wallet Info</span>
          </div>
        </div>
      </div>
      <div className="pDContainer">
        <span className="pCSpan">Personal Details</span>
        <p className="pCPara">
          Please keep your personal information up-to-date at all times. We do
          not share your information with any third party.
        </p>
        <div className="fullNameContainer">
          <span className="fullName">Full Name</span>
          <input placeholder="Full Name" className="fullNameBox" />
        </div>
        <div className="emailContainer">
          <span className="email">Email</span>
          <input
            type="text"
            placeholder="info@gmail.com"
            className="emailBox"
          />
        </div>
        <div className="dobContainer">
          <span className="dob"> Date of Birth</span>
          <input type="text" placeholder="DD/MM/YYYY" className="dobBox" />
        </div>
        <span className="photoSpan">Photo</span>
        <div className="img"></div>
      </div>
    </>
  );
};

export default UserProfile;
