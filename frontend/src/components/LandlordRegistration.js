import React from "react";

function LandlordRegistrationComponent() {
  return (
    <div className="LandlordRegistration">
      <form style={{ textAlign: "left" }} method="post">
        <label>Username</label>
        <input name="username" type="text" />
        <br />
        <label>Password</label>
        <input name="password" type="password" />
        <br />
        <hr />
        <label>First Name</label>
        <input name="firstname" type="text" />
        <label>Last Name</label>
        <input name="lastname" type="text" />
        <br />
        <label>Phone</label>
        <input name="phone" type="tel" />
        <label>Email</label>
        <input name="email" type="email" />
        <br />
        <label>Company</label>
        <input name="company" type="text" />
        <br />
        <label>Preferred Navigators</label>
        <textarea name="preferred_navigators" type="text" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LandlordRegistrationComponent;
