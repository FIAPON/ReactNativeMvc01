import {AppRegistry} from 'react-native';
import HomeController from "./src/screens/Home/Controller/HomeController"; //Importando o Home Controller 
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HomeController);
