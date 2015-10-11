Template.mainProfile.onCreated(function () {
  this.autorun(() => {
    if (!Meteor.loggingIn() && !Meteor.user() && Session.get('redirect') === true) {
      FlowRouter.go('main.login');
    }
  });
});