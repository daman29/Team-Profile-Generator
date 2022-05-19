// CreateCard class to build the card html
class CreateCard {
  // takes single employee object as input
  constructor(employee) {
    this.employee = employee;
  }

  // uses the employee object and its parameters to build the custom card html. Employee.getRole method is used to determine the role and what type of card should be returned
  generateCard() {
    if (this.employee.getRole() === "Manager") {
      return `<div class="card shadow-lg rounded m-3" style="width: 18rem">
            <div
              class="container-fluid card-img-top d-flex flex-column justify-content-center align-items-center bg-primary"
            >
              <h3 class="card-title text-white pt-1">${this.employee.name}</h3>
              <h5 class="card-subtitle text-white pb-2">☕ Manager</h5>
            </div>
  
            <div class="card-body bg-light">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.employee.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.employee.email}" target="_blank">${this.employee.email}</a></li>
                <li class="list-group-item">Office Number: ${this.employee.officeNumber}</li>
              </ul>
            </div>
          </div>`;
    } else if (this.employee.getRole() === "Engineer") {
      return `<div class="card shadow-lg rounded m-3" style="width: 18rem">
            <div
              class="container-fluid card-img-top d-flex flex-column justify-content-center align-items-center bg-primary"
            >
              <h3 class="card-title text-white pt-1">${this.employee.name}</h3>
              <h5 class="card-subtitle text-white pb-2">👓 Engineer</h5>
            </div>
  
            <div class="card-body bg-light">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.employee.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.employee.email}" target="_blank">${this.employee.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${this.employee.github}" target="_blank">${this.employee.github}</a></li>
              </ul>
            </div>
          </div>`;
    } else {
      return `<div class="card shadow-lg rounded m-3" style="width: 18rem">
            <div
              class="container-fluid card-img-top d-flex flex-column justify-content-center align-items-center bg-primary"
            >
              <h3 class="card-title text-white pt-1">${this.employee.name}</h3>
              <h5 class="card-subtitle text-white pb-2">🎓 Intern</h5>
            </div>
  
            <div class="card-body bg-light">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.employee.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.employee.email}" target="_blank">${this.employee.email}</a></li>
                <li class="list-group-item">School: ${this.employee.school}</li>
              </ul>
            </div>
          </div>`;
    }
  }
}

module.exports = CreateCard;
