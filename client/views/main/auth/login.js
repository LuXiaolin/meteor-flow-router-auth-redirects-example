Template.mainLogin.onCreated(function () {
  this.redirect = new ReactiveVar(true);

  this.autorun(() => {
    if (Meteor.user() && this.redirect === true) {
      FlowRouter.go('main.home');
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
          target.redirect.set('false');

          return FlowRouter.go('main.profile');
        }
      });
    }
  }
});