import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import BlankScreen23213525Navigator from '../features/BlankScreen23213525/navigator';
import BlankScreen22213524Navigator from '../features/BlankScreen22213524/navigator';
import BlankScreen21213523Navigator from '../features/BlankScreen21213523/navigator';
import BlankScreen19213521Navigator from '../features/BlankScreen19213521/navigator';
import BlankScreen17213519Navigator from '../features/BlankScreen17213519/navigator';
import BlankScreen16213518Navigator from '../features/BlankScreen16213518/navigator';
import BlankScreen15213517Navigator from '../features/BlankScreen15213517/navigator';
import BlankScreen14213515Navigator from '../features/BlankScreen14213515/navigator';
import BlankScreen13213514Navigator from '../features/BlankScreen13213514/navigator';
import BlankScreen12213513Navigator from '../features/BlankScreen12213513/navigator';
import BlankScreen11213512Navigator from '../features/BlankScreen11213512/navigator';
import BlankScreen9213504Navigator from '../features/BlankScreen9213504/navigator';
import BlankScreen8213503Navigator from '../features/BlankScreen8213503/navigator';
import UserProfile7213502Navigator from '../features/UserProfile7213502/navigator';
import BlankScreen6213501Navigator from '../features/BlankScreen6213501/navigator';
import BlankScreen5213500Navigator from '../features/BlankScreen5213500/navigator';
import BlankScreen4213499Navigator from '../features/BlankScreen4213499/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
BlankScreen23213525: { screen: BlankScreen23213525Navigator },
BlankScreen22213524: { screen: BlankScreen22213524Navigator },
BlankScreen21213523: { screen: BlankScreen21213523Navigator },
BlankScreen19213521: { screen: BlankScreen19213521Navigator },
BlankScreen17213519: { screen: BlankScreen17213519Navigator },
BlankScreen16213518: { screen: BlankScreen16213518Navigator },
BlankScreen15213517: { screen: BlankScreen15213517Navigator },
BlankScreen14213515: { screen: BlankScreen14213515Navigator },
BlankScreen13213514: { screen: BlankScreen13213514Navigator },
BlankScreen12213513: { screen: BlankScreen12213513Navigator },
BlankScreen11213512: { screen: BlankScreen11213512Navigator },
BlankScreen9213504: { screen: BlankScreen9213504Navigator },
BlankScreen8213503: { screen: BlankScreen8213503Navigator },
UserProfile7213502: { screen: UserProfile7213502Navigator },
BlankScreen6213501: { screen: BlankScreen6213501Navigator },
BlankScreen5213500: { screen: BlankScreen5213500Navigator },
BlankScreen4213499: { screen: BlankScreen4213499Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
