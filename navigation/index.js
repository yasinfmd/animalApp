import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../screens/homescreen";
import LoginScreen from "../screens/loginscreen";
import RegisterScreen from "../screens/registerscreen";
import {createDrawerNavigator} from '@react-navigation/drawer';
import LikedUser from "../screens/likederuserscreen";
import CustomDrawer from "../components/customDrawer";
import UserProfileScreen from "../screens/userProfileScreen";
import NewPostScreen from "../screens/newpostscreen";
import ImageBrowser from "../screens/imagebrowserscreen";
import StartupScreen from "../screens/startupscreen";
import UserPostScreen from "../screens/userpostscreen";
const appStackNavigation = createStackNavigator();

const Drawer = createDrawerNavigator();

export const AppDrawer = () => {
    return (
        <Drawer.Navigator drawerPosition="left" drawerType="slide"
                          drawerContent={CustomDrawer}
        >
            <Drawer.Screen name="AnaSayfa" component={HomeScreen} options={{
                headerShown: false,
            }}/>
            <Drawer.Screen name="Gonderilerim" component={UserPostScreen} options={{
                headerShown: false,
            }}/>
        </Drawer.Navigator>
    )
}

export const AppNavigator = () => {
    return (
        <appStackNavigation.Navigator>
            <appStackNavigation.Screen
                options={{
                    headerShown: false,
                }}
                name="Startup" component={StartupScreen}/>
            <appStackNavigation.Screen
                options={{
                    headerShown: false,
                }}
                name="Login" component={LoginScreen}/>
            <appStackNavigation.Screen
                options={{
                    headerShown: false,
                }}
                name="AnaSayfa" component={AppDrawer}/>
            <appStackNavigation.Screen
                options={{
                    headerShown: false,
                }}
                name="Begenenler" component={LikedUser}/>

            <appStackNavigation.Screen
                options={
                    {

                        headerShown: false,
                    }
                }
                name="Profil" component={UserProfileScreen}/>

            <appStackNavigation.Screen
                options={
                    {
                        headerShown: false,
                    }
                }
                name="Gonderi" component={NewPostScreen}/>

            <appStackNavigation.Screen
                options={
                    {headerShown: false,}
                }
                name="ImageBrowser" component={ImageBrowser}/>

            <appStackNavigation.Screen
                options={{
                    headerShown: false,
                }}
                name="Register" component={RegisterScreen}/>
        </appStackNavigation.Navigator>
    )
}