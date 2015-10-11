Template.registerHelper('route', function (route, values) {
  if (!route) {
    throw new Error('No path or route name specified');
  }

  return FlowRouter.path(route, values.hash, {});
});