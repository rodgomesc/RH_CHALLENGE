import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import PersonCreate from './pages/Person/Create';
import PersonDetail from './pages/Person/Detail';
import PersonEdit from './pages/Person/Edit';
import PersonList from './pages/Person/List';

const Routes = createAppContainer(
  createStackNavigator(
    {
      PersonList,
      PersonDetail,
      PersonCreate,
      PersonEdit,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerBackground: (
          <LinearGradient
            colors={['#95ADE8', '#6EB7F8']}
            style={{flex: 1, borderBottomWidth: 0.5, borderBottomColor: '#fff'}}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
          />
        ),
        headerTintColor: '#FFF',
      },
    },
  ),
);

export default Routes;
