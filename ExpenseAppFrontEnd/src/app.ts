import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;
  message:string;

  constructor(){
    this.message = "Hello, World" + new Date();
  }

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = "Expense Manager Application";
    config.map([
      { route: '', moduleId: 'home-page', title: "Exspense App - Main Page", name: 'home'},
      { route: 'home', moduleId: 'home-page', title: "Exspense App - Main Page", name: 'homeexplicit'},   
      { route: 'addExpense', moduleId: './components/add-expense', title:'Add Expense', name: 'addExpense'}   
    ]);

    this.router = router;
  }
}
