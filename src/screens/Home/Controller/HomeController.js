import React from 'react';
import HomeView from '../View/HomeView' //Importando o view
import HomeModel from '../Model/HomeModel' //Importando o model

class HomeController extends React.Component {

  constructor() {
    super();
    this.homeModel = new HomeModel(); //inicializando o view
  }

  render() {
    return (
      <HomeView /> //Chamando o View
    )
  }
}

export default HomeController;
