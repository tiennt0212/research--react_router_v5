import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";
import { DefaultLayout, AuthLayout, SettingLayout } from "./layouts";
import {
  PrivacyPolicy,
  TermsOfUse,
  SignIn,
  SignUp,
  ResetPw,
  Blog,
  BlogDetails,
  Discover,
  Home,
  ProfileInfo,
  ProfileNotification,
  ProfilePwManager,
  ProfileHelperCenter,
  PageNotFound,
} from "./containers";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route exact path="/terms-of-use">
          <TermsOfUse />
        </Route>
        <Route path="/auth">
          <AuthLayout>
            <Switch>
              <Route path="/auth/sign-in">
                <SignIn />
              </Route>
              <Route path="/auth/sign-up">
                <SignUp />
              </Route>
              <Route path="/auth/reset-password">
                <ResetPw />
              </Route>
              <Route path="/*">
                <Redirect to="/404" />
              </Route>
            </Switch>
          </AuthLayout>
        </Route>
        <Route path="/profile">
          <SettingLayout>
            <Switch>
              <Route exact path="/profile">
                <ProfileInfo />
              </Route>
              <Route path="/profile/information">
                <ProfileInfo />
              </Route>
              <Route path="/profile/notification">
                <ProfileNotification />
              </Route>
              <Route path="/profile/password-manager">
                <ProfilePwManager />
              </Route>
              <Route path="/profile/helper-center">
                <ProfileHelperCenter />
              </Route>
              <Route path="/*">
                <Redirect to="/404" />
              </Route>
            </Switch>
          </SettingLayout>
        </Route>
        <Route exact path="/404">
          <PageNotFound />
        </Route>
        <Route path="/">
          <DefaultLayout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/discover">
                <Discover />
              </Route>
              <Route exact path="/blog">
                <Blog />
              </Route>
              <Route path="/blog/:blogId">
                <BlogDetails />
              </Route>
              <Route path="/*">
                <Redirect to="/404" />
              </Route>
            </Switch>
          </DefaultLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
