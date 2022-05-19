const Employee = require("../lib/Employee");

// tests for the employee constructor
describe("Employee", () => {
  // tests for the employee constructor initialization
  describe("Initialization", () => {
    it("should create an object with a name, id and email if provided valid arguments", () => {
      const employee = new Employee("Mark", "MK548", "mark@gmail.com");

      expect(employee.name).toEqual("Mark");
      expect(employee.id).toEqual("MK548");
      expect(employee.email).toEqual("mark@gmail.com");
    });
  });

  // test for the getName method
  describe("getName", () => {
    it("should return the name of the employee", () => {
      const employee = new Employee("Mark", "MK548", "mark@gmail.com");

      expect(employee.getName()).toEqual("Mark");
    });
  });

  // test for the getId method
  describe("getId", () => {
    it("should return the id of the employee", () => {
      const employee = new Employee("Mark", "MK548", "mark@gmail.com");

      expect(employee.getId()).toEqual("MK548");
    });
  });

  //test for the getEmail method
  describe("getEmail", () => {
    it("should return the email of the employee", () => {
      const employee = new Employee("Mark", "MK548", "mark@gmail.com");

      expect(employee.getEmail()).toEqual("mark@gmail.com");
    });
  });

  // test for the getRole method
  describe("getRole", () => {
    it("should return the role of the employee", () => {
      const employee = new Employee("Mark", "MK548", "mark@gmail.com");

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
