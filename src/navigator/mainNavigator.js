import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile88104Navigator from '../features/UserProfile88104/navigator';
import Maps88085Navigator from '../features/Maps88085/navigator';
import Settings88063Navigator from '../features/Settings88063/navigator';
import Settings88048Navigator from '../features/Settings88048/navigator';
import NotificationList88047Navigator from '../features/NotificationList88047/navigator';
import Maps88046Navigator from '../features/Maps88046/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile88104: { screen: UserProfile88104Navigator },
Maps88085: { screen: Maps88085Navigator },
Settings88063: { screen: Settings88063Navigator },
Settings88048: { screen: Settings88048Navigator },
NotificationList88047: { screen: NotificationList88047Navigator },
Maps88046: { screen: Maps88046Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
