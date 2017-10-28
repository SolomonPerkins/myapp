module.exports = {
    //Remove space and return a sanitize file
    trim: function(str) {
      if(str == null){
        return "";
      }
        return str.trim();
    },

    padding: function(element, padder, paddingSize) {
      var updatedElement = element;
      for(var index = 0; index < paddingSize; index++){
        updatedElement += padder;
      }

      return;
    },


}
