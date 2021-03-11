import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import BlankScreen49213871Navigator from '../features/BlankScreen49213871/navigator';
import BlankScreen48213870Navigator from '../features/BlankScreen48213870/navigator';
import BlankScreen47213869Navigator from '../features/BlankScreen47213869/navigator';
import BlankScreen45213867Navigator from '../features/BlankScreen45213867/navigator';
import BlankScreen44213866Navigator from '../features/BlankScreen44213866/navigator';
import BlankScreen43213865Navigator from '../features/BlankScreen43213865/navigator';
import BlankScreen42213675Navigator from '../features/BlankScreen42213675/navigator';
import Feed38213674Navigator from '../features/Feed38213674/navigator';
import BlankScreen39213671Navigator from '../features/BlankScreen39213671/navigator';
import BlankScreen38213670Navigator from '../features/BlankScreen38213670/navigator';
import BlankScreen36213538Navigator from '../features/BlankScreen36213538/navigator';
import BlankScreen35213537Navigator from '../features/BlankScreen35213537/navigator';
import BlankScreen34213536Navigator from '../features/BlankScreen34213536/navigator';
import BlankScreen33213535Navigator from '../features/BlankScreen33213535/navigator';
import BlankScreen32213534Navigator from '../features/BlankScreen32213534/navigator';
import BlankScreen31213533Navigator from '../features/BlankScreen31213533/navigator';
import BlankScreen30213532Navigator from '../features/BlankScreen30213532/navigator';
import BlankScreen29213531Navigator from '../features/BlankScreen29213531/navigator';
import BlankScreen28213530Navigator from '../features/BlankScreen28213530/navigator';
import BlankScreen27213529Navigator from '../features/BlankScreen27213529/navigator';
import BlankScreen26213528Navigator from '../features/BlankScreen26213528/navigator';
import BlankScreen25213527Navigator from '../features/BlankScreen25213527/navigator';
import BlankScreen24213526Navigator from '../features/BlankScreen24213526/navigator';
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
BlankScreen49213871: { screen: BlankScreen49213871Navigator },
BlankScreen48213870: { screen: BlankScreen48213870Navigator },
BlankScreen47213869: { screen: BlankScreen47213869Navigator },
BlankScreen45213867: { screen: BlankScreen45213867Navigator },
BlankScreen44213866: { screen: BlankScreen44213866Navigator },
BlankScreen43213865: { screen: BlankScreen43213865Navigator },
BlankScreen42213675: { screen: BlankScreen42213675Navigator },
Feed38213674: { screen: Feed38213674Navigator },
BlankScreen39213671: { screen: BlankScreen39213671Navigator },
BlankScreen38213670: { screen: BlankScreen38213670Navigator },
BlankScreen36213538: { screen: BlankScreen36213538Navigator },
BlankScreen35213537: { screen: BlankScreen35213537Navigator },
BlankScreen34213536: { screen: BlankScreen34213536Navigator },
BlankScreen33213535: { screen: BlankScreen33213535Navigator },
BlankScreen32213534: { screen: BlankScreen32213534Navigator },
BlankScreen31213533: { screen: BlankScreen31213533Navigator },
BlankScreen30213532: { screen: BlankScreen30213532Navigator },
BlankScreen29213531: { screen: BlankScreen29213531Navigator },
BlankScreen28213530: { screen: BlankScreen28213530Navigator },
BlankScreen27213529: { screen: BlankScreen27213529Navigator },
BlankScreen26213528: { screen: BlankScreen26213528Navigator },
BlankScreen25213527: { screen: BlankScreen25213527Navigator },
BlankScreen24213526: { screen: BlankScreen24213526Navigator },
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
