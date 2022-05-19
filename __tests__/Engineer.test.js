const Engineer = require("../lib/Engineer");

// tests for the Engineer constructor
describe("Engineer", () => {
  // test for the initialization of the engineer object
  describe("Initialization", () => {
    it("should create an object with a name, id, email and github if provided valid arguments", () => {
      const engineer = new Engineer(
        "Daman",
        "DN223",
        "daman@email.com",
        "daman29"
      );

      expect(engineer.name).toEqual("Daman");
      expect(engineer.id).toEqual("DN223");
      expect(engineer.email).toEqual("daman@email.com");
      expect(engineer.github).toEqual("daman29");
    });
  });

    // test for the getGithub method
    describe("getGithub", () => {
        it("should return the GitHub username of the employee", () => {
            const engineer = new Engineer(
                "Daman",
                "DN223",
                "daman@email.com",
                "daman29"
              );
    
          expect(engineer.getGithub()).toEqual("daman29");
        });
      });
    
      // test for the getRole method
      describe("getRole", () => {
        it("should return the GitHub username of the employee", () => {
            const engineer = new Engineer(
                "Daman",
                "DN223",
                "daman@email.com",
                "daman29"
              );
    
          expect(engineer.getRole()).toEqual("Engineer");
        });
      });
});
