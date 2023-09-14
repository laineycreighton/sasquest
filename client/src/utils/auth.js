import decode from "jwt-decode";

class Auth {
  // decodes jwt from local storage
  getProfile() {
    return decode(this.getToken());
  }
  // check if user is logged in by checking local storage for token
  loggedIn() {
    const token = this.getToken();
    // If there is a token and it's not expired, return `true`
    return token && !this.isTokenExpired(token) ? true : false;
  }
  isTokenExpired(token) {
    // Decodes token and checks expiration time determined by the server
    const decoded = decode(token);
    // If expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("id_token");
      return true;
    }
    // If token is NOT expired (still valid), return `false`
    return false;
  }

  getToken() {
    return localStorage.getItem("id_token");
  }
  // logs in a user by adding the jwt idToken to local storage
  login(idToken) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }
  // logs out user by destroying jwt token from local storage
  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/");
    console.log("logging out");
  }
}

export default new Auth();
