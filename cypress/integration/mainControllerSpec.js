var mainController = require('../../controller/mainController.js');
var mainService = require('../../service/mainService.js');
var userDetailsSrv;
var initFn,
    getUserDetailsFn;
var request;
var response;
var nxtFn;

describe('MainController', function(){
  //Separate test features.
  describe('init function', function() {
    beforeEach(function() {
        initFn = mainController.init;
        request = {
          send: function(){}
        };
    });

    afterEach(function(){
      initFn = null;
      request = null;
    });

    //Test for basic case
    it('should be defined', function(done){
      //Assign
      //Act
      //Assert
      expect(typeof initFn).to.equal("function");
      done();
    });

    //Test for edge case
    it('should fail to send response if necessary variables weren\'t defined', function(done){
      //Assign
      response = cy.stub();

      //Act
      try{
        initFn();
        done(new Error("This test should fail as it init contains invalid parameter"));
      }catch(e){
        //Assert
        expect(e.message).to.contains("Cannot read property \'send\' of undefined");
        done();
      }
    });

    //Test for ideal case.
    it('should send the response once init was called successfully', function(done) {
      //Assign
      response = {
        send: function(){}
      };
      const spyResp = cy.spy(response,'send');

      //Act
      initFn(request, response);

      //Assert
      expect(spyResp).to.be.calledWith("Hello World!");

      done();
    });
  });


  describe("getUserDetails function: ", function() {
      beforeEach(function(){
        getUserDetailsFn = mainController.getUserDetails;
        request = {
          body: {

          }
        };

      });
      afterEach(function(){
        getUserDetailsFn = null;
        request = null;
        nextFn = function(param) {
          return param;
        };
      });

      it("should be defined", function(done) {
        //Assign
        //Act
        //Assert
        expect(typeof getUserDetailsFn).to.equal("function");

        done();
      });

      it("should fail if userDetails service request returns invalid data", function(done){
         //Assign
         console.log(mainService);
         const ursService = cy.stub(mainService, "getUserDetails").returns(null);
         //const spyResp = cy.spy(response, "send");

         //Act
         try{
           getUserDetailsFn(request, response, nxtFn);
           done();
         } catch(e) {
           expect(e.message).to.contains("Fail to obtain user details");
           done();
         }
      });

  });

})
