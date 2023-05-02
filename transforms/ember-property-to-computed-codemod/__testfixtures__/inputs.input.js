const myObject = {
  myTotals: (function() {
    return get(this, "model.total") || 0;
  }).property("model.total"),
  
  shouldShow: ( function() {
    return (get(this, "model.id") !== null) && get(this, "user.isAdmin");
  }).property("model.id", "user.isAdmin"),
  
  isDisabled: Em.computed("model.isDirty", "isDirty", function() {
    return get(this, "model.isDisabled") < 1 || get(this, "isDirty");
  }),
  
  isModern: computed("isDirty", "model.length", function() {
    return get(this, "model.length") < 1 || get(this, "isDirty");
  })
}