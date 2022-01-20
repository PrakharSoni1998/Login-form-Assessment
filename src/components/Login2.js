import React from 'react';

const Login2 = () => {
  return <div>
      hkkkkkkkkkkkk
      <form>
  Username
  <input type="text" name="username" autofocus="" autocapitalize="none" autocomplete="username" required="" id="id_username" /> 
  Password
  <input type="password" name="password" autocomplete="current-password" required="" id="id_password" />
  <i class="far fa-eye" id="togglePassword" style="margin-left: -30px; cursor: pointer;"></i>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
  </div>;
};

export default Login2;
