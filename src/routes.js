import {createAppContainer, create} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import PersonCreate from './pages/Person/Create';
import PersonDetail from './pages/Person/Detail';
import PersonEdit from './pages/Person/Edit';
import PersonList from './pages/Person/List';

const Routes = createAppContainer(
  createStackNavigator({
    PersonCreate,
    PersonEdit,
    PersonDetail,
    PersonList,
  }),
);

export default Routes;
