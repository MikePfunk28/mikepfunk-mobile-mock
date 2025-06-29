// filepath: [linkedin-badge.tsx](http://_vscodecontentref_/0)
import { useEffect } from "react";

export const LinkedInBadge = () => {
  useEffect(() => {
    if (!document.getElementById("linkedin-badge-script")) {
      const script = document.createElement("script");
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
      script.defer = true;
      script.type = "text/javascript";
      script.id = "linkedin-badge-script";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="badge-base LI-profile-badge"
      data-locale="en_US"
      data-size="large"
      data-theme="dark"
      data-type="HORIZONTAL"
      data-vanity="michaelpfundt"
      data-version="v1"
    >
      <a
        className="badge-base__link LI-simple-link"
        href="https://www.linkedin.com/in/michaelpfundt?trk=profile-badge"
      >
        Michael P.
      </a>
    </div>
  );
};