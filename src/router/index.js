import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { GoogleOAuthProvider } from '@react-oauth/google';
import { IntercomProvider } from 'react-use-intercom';

import NotFound from 'screens/NotFound' 

import Login from 'screens/Authentication/Login' 
import Register from 'screens/Authentication/Register' 
import Forgot from 'screens/Authentication/Forgot' 
import CreatePassword from 'screens/Authentication/CreatePassword' 

import DashboardHome from 'screens/Dashboard/Home' 
import DashboardMe from 'screens/Dashboard/Me' 
import DashboardCampaing from "screens/Dashboard/Campaing";
import DashboardCampaingCreate from "screens/Dashboard/CampaingCreate";
import DashboardCampaingDetails from "screens/Dashboard/CampaingDetails";
import DashboardSupport from "screens/Dashboard/Support";
import DashboardProfile from "screens/Dashboard/Profile";
import DashboardProfileEdit from "screens/Dashboard/ProfileEdit";
import DashboardCampaingEdit from "screens/Dashboard/CampaingEdit";

export default function AppRouter() {
    return (
      <Router>  
        <GoogleOAuthProvider clientId="56479810606-gh11cj9lnln8m1ciinjio0e5caqe5ad5.apps.googleusercontent.com">
          <IntercomProvider appId={"opc45iqq"}>
            <div>
              <Switch>
                {/* <Route path="/" exact> <Landpage /> </Route>  */}
                
                <Route path="/" exact> <Login /> </Route> 
                <Route path="/login" exact> <Login /> </Route> 
                <Route path="/register" exact> <Register /> </Route> 
                <Route path="/forgot" exact> <Forgot /> </Route> 
                <Route path="/create-password" exact> <CreatePassword /> </Route> 
                
                <Route path="/dashboard" exact> <DashboardHome /> </Route> 
                
                <Route path="/dashboard/campaing" exact> <DashboardCampaing /> </Route> 
                <Route path="/dashboard/campaing/create" exact> <DashboardCampaingCreate /> </Route> 
                <Route path="/dashboard/campaing/create/:type" exact> <DashboardCampaingCreate /> </Route> 
                <Route path="/dashboard/campaing/create/:type/:step" exact> <DashboardCampaingCreate /> </Route> 
                <Route path="/dashboard/campaing/details/:id" exact> <DashboardCampaingDetails /> </Route> 
                <Route path="/dashboard/campaing/edit/:id" exact> <DashboardCampaingEdit /> </Route> 
                <Route path="/dashboard/support" exact> <DashboardSupport /> </Route> 
                <Route path="/dashboard/profile" exact> <DashboardProfile /> </Route> 
                <Route path="/dashboard/profile/edit" exact> <DashboardProfileEdit /> </Route> 

                <Route path="/dashboard/Me" exact> <DashboardMe /> </Route> 
                
                <Route path="*" exact> <NotFound /> </Route>
              </Switch>
            </div>
          </IntercomProvider>
        </GoogleOAuthProvider>
      </Router>
    );
}