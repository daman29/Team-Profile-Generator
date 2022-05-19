const Manager = require("../lib/Manager");

// tests for the Manager constructor
describe("Manager", () => {
  // test for the initialization of the Manager object
  describe("Initialization", () => {
    it("should create an object with a name, id, email and officeNumber if provided valid arguments", () => {
      const manager = new Manager(
        "Daman",
        "DN223",
        "daman@email.com",
        "520"
      );

      expect(manager.name).toEqual("Daman");
      expect(manager.id).toEqual("DN223");
      expect(manager.email).toEqual("daman@email.com");
      expect(manager.officeNumber).toEqual("520");
    });
  });
    
      // test for the getRole method
      describe("getRole", () => {
        it("should return the GitHub username of the employee", () => {
            const manager = new Manager(
                "Daman",
                "DN223",
                "daman@email.com",
                "520"
              );
    
          expect(manager.getRole()).toEqual("Manager");
        });
      });
});
