import React from "react";
import "./style.css";

export const NavBar = ({
  style,
  rectangleStyle,
  rectangleStyleOverride,
  homeStyle,
  theFacilityStyle,
  membershipsStyle,
  battingCagesStyle,
  programsEventsStyle,
  contactUsStyle,
  rectangle6Style,
  iconsaxLinearUsersquareStyle,
  iconsaxLinearUsersquare = "/img/iconsax-linear-usersquare.svg",
  SIGNUpStyle,
}) => {
  return (
    <div className={"NAV-BAR-NAV-BAR"}>
      <div className={"NAV-BAR-overlap-group"}>
        <div className={"NAV-BAR-rectangle"} style={rectangleStyle} />
        <div className={"NAV-BAR-rectangle-5"} style={rectangleStyleOverride} />
        <div className={"NAV-BAR-home"} style={homeStyle}>
          Home
        </div>
        <div className={"NAV-BAR-the-facility"} style={theFacilityStyle}>
          The Facility
        </div>
        <a href="#coursel">
          <div className={"NAV-BAR-memberships"} style={membershipsStyle}>
            Memberships
          </div>
        </a>
        <div className={"NAV-BAR-batting-cages"} style={battingCagesStyle}>
          Batting Cages
        </div>
        <div className={"NAV-BAR-programs-events"} style={programsEventsStyle}>
          Programs &amp; Events
        </div>
        <div className={"NAV-BAR-contact-us"} style={contactUsStyle}>
          Contact Us
        </div>
        <div className={"NAV-BAR-rectangle-6"} style={rectangle6Style} />
        <img
          className={"NAV-BAR-iconsax-linear-usersquare"}
          style={iconsaxLinearUsersquareStyle}
          src={iconsaxLinearUsersquare}
        />
        <a href="http://35.72.8.63:36475/">
          <div className={"NAV-BAR-SIGN-UP"} style={SIGNUpStyle}>
            SIGN UP
          </div>
        </a>
        <img className={"NAV-BAR-OLYMPICLOGO"} src={"/img/olympiclogo-1.png"} />
      </div>
    </div>
  );
};
