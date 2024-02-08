/**Nosso App.js será responsável por qual rota deverá exibir */


import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import Home from '../pages/Home';
import StackRoutes from './stackRoutes';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import CustomDrawer from '../components/CustomDrawer'

const Drawer = createDrawerNavigator();


export default function Routes() {
  return (
    <Drawer.Navigator
    drawerContent={CustomDrawer}>
      <Drawer.Screen
        name='HomeStack'
        component={StackRoutes}
      />
      <Drawer.Screen
        name="Sobre"
        component={Sobre}
      />
      <Drawer.Screen 
        name="Contato"
        component={Contato}
      />

    </Drawer.Navigator>
  )
}