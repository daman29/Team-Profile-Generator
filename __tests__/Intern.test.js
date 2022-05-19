const Intern = require("../lib/Intern");

// tests for the Intern constructor
describe("Intern", () => {
  // test for the initialization of the intern object
  describe("Initialization", () => {
    it("should create an object with a name, id, email and School if provided valid arguments", () => {
      const intern = new Intern(
        "Daman",
        "DN223",
        "daman@email.com",
        "Adelaide University"
      );

      expect(intern.name).toEqual("Daman");
      expect(intern.id).toEqual("DN223");
      expect(intern.email).toEqual("daman@email.com");
      expect(intern.school).toEqual("Adelaide University");
    });
  });

    // test for the getSchool method
    describe("getSchool", () => {
        it("should return the GitHub username of the employee", () => {
            const intern = new Intern(
                "Daman",
                "DN223",
                "daman@email.com",
                "Adelaide University"
              );
    
          expect(intern.getSchool()).toEqual("Adelaide University");
        });
      });
    
      // test for the getRole method
      describe("getRole", () => {
        it("should return the GitHub username of the employee", () => {
            const intern = new Intern(
                "Daman",
                "DN223",
                "daman@email.com",
                "Adelaide University"
              );
    
          expect(intern.getRole()).toEqual("Intern");
        });
      });
});
