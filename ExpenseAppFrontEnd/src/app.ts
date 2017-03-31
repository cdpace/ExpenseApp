import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  constructor(){
    
  }

  configureRounter(config: RouterConfiguration, router: Router){
    config.title = "Expense Manager Application";
    config.map([
      { route: '', moduleId: 'mainPage', title: "Exspense App - Main Page", name: 'main'}
    ]);

    this.router = router;
  }
}
