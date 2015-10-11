Template.adminLayout.onCreated(function () {
  this.autorun(() => {
    if (!Meteor.loggingIn()) {
      if (!Meteor.user()) {
        FlowRouter.go('main.login');
      }
    }
  });
});