Meteor.startup(function () {
  Tracker.autorun(function () {
    Session.set('redirect', true);
  });
});