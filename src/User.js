class User {
  uid = null;
  firstName = null;
  lastName = null;
  displayName = null;
  email = null;
  gender = null;
  photoURL = null;

  constructor(uid, displayName, email, gender, photoURL) {
    this.uid = uid;
    this.displayName = displayName;
    this.email = email;
    this.gender = gender;
    this.photoURL = photoURL;
  }
}
export default User;
