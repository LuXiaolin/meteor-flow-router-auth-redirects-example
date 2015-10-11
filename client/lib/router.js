FlowRouter.route('/', {
  name: 'main.home',
  action: function () {
    BlazeLayout.render('layout', {main: "mainHome"});
  }
});

FlowRouter.route('/login', {
  name: 'main.login',
  action: function () {
    BlazeLayout.render('layout', {main: "mainLogin"});
  }
});

FlowRouter.route('/profile', {
  name: 'main.profile',
  action: function () {
    BlazeLayout.render('layout', {main: "mainProfile"});
  }
});

FlowRouter.route('/logout', {
  name: 'main.logout',
  action: function () {
    return Meteor.logout(function () {
      return FlowRouter.go('main.home');
    })
  }
});

FlowRouter.route('/admin', {
  name: 'admin.dashboard',
  action: function () {
    BlazeLayout.render('adminLayout', {main: "adminDashboard"});
  }
});

FlowRouter.route('/admin/users', {
  name: 'admin.users',
  action: function () {
    BlazeLayout.render('adminLayout', {main: "adminUsers"});
  }
});