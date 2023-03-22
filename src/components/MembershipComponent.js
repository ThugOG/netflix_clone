import React from "react";

const MembershipComponent = () => {
  return (
    <div className="membership_Comp">
      <h3>Unlimited movies, TV shows and more.</h3>
      <p>Watch anywhere. Cancel anytime.</p>
      <div className="input_mem">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div>
          <input type="text" placeholder="Email address"></input>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default MembershipComponent;
