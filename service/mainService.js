module.exports = {
  getUserDetails: function(obj) {
    return "Object is: " + obj.name;
  },


  updateUserProfile: function(userObj, portalDetails, portion) {
      if(!!userObj) {
        if(userObj.type = "Admin") {
          portalDetails.profile = "adminProfile";
        } else {
          portalDetails.profile = "userProfile";
        }
      }

      return portalDetails;
  }


}
