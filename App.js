import React from 'react';
import PropTypes from 'prop-types';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/screens/signin/SignIn';
import ForgotPin from './src/screens/forgotpin/ForgotPin';
import Verification from './src/screens/verification/Verification';
import ResetPin from './src/screens/resetpin/ResetPin';
import Welcome from './src/screens/welcome/Welcome';
import ManageMembers from './src/screens/managemembers/ManageMembers';
import AddMembers from './src/screens/addmembers/AddMembers';
import EditMembers from './src/screens/editmembers/EditMembers';
import ViewAddMembers from './src/screens/viewaddmembers/ViewAddMembers';
import Subscription from './src/screens/subscription/Subscription';
import SubscriptionDetail from './src/screens/subscriptiondetail/SubscriptionDetail';

import ManageCashRegister from './src/screens/managecashregister/ManageCashRegister';
import ManageCollection from './src/screens/managecollection/ManageCollection';
import MyCashRegister from './src/screens/mycashregister/MyCashRegister';
import SeeReport from './src/screens/seereport/SeeReport';
import AddSubscription from './src/screens/addsubscription/AddSubscription';
import AddDepositCollection from './src/screens/adddepositcollection/AddDepositCollection';

const Stack = createNativeStackNavigator();
const App = props => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignIn'>
        <Stack.Screen name="SignIn" component={SignIn}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="ForgotPin" component={ForgotPin}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Verification" component={Verification}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="AddDepositCollection" component={AddDepositCollection}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="AddSubscription" component={AddSubscription}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="SeeReport" component={SeeReport}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="ManageCashRegister" component={ManageCashRegister}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="MyCashRegister" component={MyCashRegister}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="ManageCollection" component={ManageCollection}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="AddMembers" component={AddMembers}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Subscription" component={Subscription}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="SubscriptionDetail" component={SubscriptionDetail}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="EditMembers" component={EditMembers}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="ViewAddMembers" component={ViewAddMembers}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="ResetPin" component={ResetPin}
          options={{
            headerShown: false,
          }} />


        <Stack.Screen name="Welcome" component={Welcome}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="ManageMembers" component={ManageMembers}
          options={{
            headerShown: false,
          }} />

        {/* <Stack.Screen name="Login" component={Login}
          options={{
          headerShown: false,
          }} />
          <Stack.Screen name="Home" component={Home}
          options={{
          headerShown: false,
          }} />
             <Stack.Screen name="Detail" component={Detail}
          options={{
          headerShown: false,
          }} />
              <Stack.Screen name="Members" component={Members}
          options={{
          headerShown: false,
          }} />
                <Stack.Screen name="MyCashRegister" component={MyCashRegister}
          options={{
          headerShown: false,
          }} />
          <Stack.Screen name="Forget" component={Forget}
          options={{
          headerShown: false,
          }} />
            <Stack.Screen name="Verification" component={Verification}
          options={{
          headerShown: false,
          }} />
            <Stack.Screen name="Reset" component={Reset}
          options={{
          headerShown: false,
          }} />
    <Stack.Screen name="AddMembers" component={AddMembers}
          options={{
          headerShown: false,
          }} />
          <Stack.Screen name="EditMembers" component={EditMembers}
          options={{
          headerShown: false,
          }} />
                 <Stack.Screen name="AccountCreated"
                  component={AccountCreated}
          options={{
          headerShown: false,
          }} /> */}
      </Stack.Navigator>
    </NavigationContainer>

  );
};

App.propTypes = {

};

export default App;