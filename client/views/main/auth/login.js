Template.mainLogin.onCreated(function () {
  this.autorun(() => {
    if (Meteor.user()) {
      FlowRouter.go('main.profile');
    }
  });
});

Template.mainLogin.events({
  'submit form': function (event, target) {
    event.preventDefault();

    let user = target.find('input[name=user]').value,
        password = target.find('input[name=password]').value;

    if (user.length && password.length) {
      Meteor.loginWithPassword(user, password, function (error) {
        if (error) {
          return FlowRouter.go('main.home');
        } else {
          Session.set('redirect', true);
        }
      });
    }
  }
});