import React from 'react';
import HomeView from '../View/HomeView' //Importando o view
import HomeModel from '../Model/HomeModel' //Importando o model

class HomeController extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      isTimeRunning: false,
    }; //inicializando o state
    this.homeModel = new HomeModel();//inicializando o view
    this.homeModel.getSomeInfo(); // chamando o metodo do model
  }

  //criando um novo método para verificar o toque
  buttonPressed = () =>{

    console.log(" buttonPressed ");

    //Checa se o tempo esta rodando
    if(this.state.isTimeRunning){
      //limpando o interval
      clearInterval(this.interval);
      //Alterando a variavel isTimeRunning
      this.setState({        
        isTimeRunning: false,
      })
    } else {
      //Inicializando o timeout
      this.interval = setInterval(() => {
        this.setState({
          count: this.state.count+1,
        });  

      }, 1000);
      
      //Alterando a variavel isTimeRunning
      this.setState({
        isTimeRunning: true,
      });   
    }    
  }


  static getDerivedStateFromProps(props, state){
    console.log(" Chamando getDerivedStateFromProps ");
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log(" Chamando getSnapshotBeforeUpdate ");
  }

  componentDidMount(){
    console.log(" Chamando componentDidMount ");
  }

  shouldComponentUpdate(nextProps, nextState){    
             //Só irá atualizar quando o count for diferente de 1
    if(this.state.count === 1){
      console.log(" Chamando shouldComponentUpdate = false ");
      return false;
    } else {
      console.log(" Chamando shouldComponentUpdate = true ");
      return true;
    }    
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log(" Chamando getSnapshotBeforeUpdate ");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log(" Chamando componentDidUpdate ");
  }

  componentWillUnmount() {
    console.log(" Chamando componentWillUnmount ");
  }

  render() {    
    console.log(" Chamando Render ");
    return (
      //Chamando o View e passando o props count_info
      <HomeView
        onButtonPressed={this.buttonPressed} //criando props onButtonPressed e passando o método
        count_info={this.state.count}
       /> 
    )
  }
}


export default HomeController;
