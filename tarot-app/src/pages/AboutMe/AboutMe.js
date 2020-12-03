import React from "react";
import imageUser from "../../assets/userimage.png";
import Behance from "../../assets/behance.svg";
import Github from "../../assets/github.svg";
import Instagram from "../../assets/instagram.svg";
import { withNamespaces } from "react-i18next";

const AboutMe = ({ t }) => {
  return (
    <div className="aboutMeMainContainer" role="main">
      <div className="leftContainer">
        <div className="imageAboutMeContainer">
          <img className="imageAboutMe" src={imageUser} alt="" />
        </div>
        <div className="socialAboutMe">
          <span aria-hidden="true" role="presentation">
            <a
              href="https://www.behance.net/chiaradiaz/"
              target="_blank"
              aria-label="go to/visit my Behance"
            >
              <img src={Behance} alt="" className="socialAboutMeIcon" />
            </a>
          </span>
          <span aria-hidden="true" role="presentation">
            <a
              href="https://github.com/chiaradiaz1991"
              target="_blank"
              aria-label="go to/visit my Github"
            >
              <img src={Github} alt="" className="socialAboutMeIcon" />
            </a>
          </span>
          <span aria-hidden="true" role="presentation">
            <a
              href="https://www.instagram.com/chiarailustra/"
              target="_blank"
              aria-label="go to/visit my Instagram"
            >
              <img src={Instagram} alt="" className="socialAboutMeIcon" />
            </a>
          </span>
        </div>
      </div>
      <div className="textAboutMe">
        <h1 className="myName">{t("about-me.name")}</h1>
        <p className="presentation">{t("about-me.content-a")}</p>
        <p className="presentationTwo">{t("about-me.content-b")}</p>
        <p className="presentationTwo">{t("about-me.special-mention")}</p>
        <p className="presentationTwo">{t("about-me.email")}</p>
      </div>
    </div>
  );
};

export default withNamespaces()(AboutMe);
