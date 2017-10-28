var generalUtil= require('../../utility/generalUtil.js');

describe('generalUtil', function(){
  describe('trim', function(){
      it('should be defined', function(){

      })

      it('should not be null', function(){
        //Assign
        var str = null;
        //Act
        var response = generalUtil.trim(str);
        //Assert
        expect(response).to.equal("");
      });
      it('should be string', function(){

      });
      it('should not be empty', function(){

      })



  })

  describe('padding', function(){
    it('should be defined');

    it('should return a padded value');

    it('should return an empty string if all three parameters are missing');

    it('');
  })



})
