import React from 'react';

function LandlordRegistrationComponent () {
  return (
    <div className="LandlordRegistration">
      <form style={{textAlign:'left'}} method="post">
        <label>Username</label>
        <input id="username" type="text" />
        <br/>
        <label>Password</label>
        <input id="password" type="password" />
        <br/>
        <hr/>
        <label>First Name</label>
        <input id="firstname" type="text" />
        <label>Last Name</label>
        <input id="lastname" type="text" />
        <br/>
        <label>Phone</label>
        <input id="phone" type="text" />
        <label>Email</label>
        <input id="email" type="email" />
        <br/>
        <label>Company</label>
        <input id="company" type="text" />
        <br/>
        <label>Preferred Navigators</label>
        <textarea id="preferred_navigators" type="text" />
        <br/>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default LandlordRegistrationComponent;
