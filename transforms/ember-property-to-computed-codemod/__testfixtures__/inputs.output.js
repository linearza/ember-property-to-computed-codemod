const myObject = {
  myTotals: computed("model.total", function() {
    return get(this, "model.total") || 0;
  }),
  
  shouldShow: computed("model.id", "user.isAdmin", function() {
    return (get(this, "model.id") !== null) && get(this, "user.isAdmin");
  }),
  
  isDisabled: Em.computed("model.isDirty", "isDirty", function() {
    return get(this, "model.isDisabled") < 1 || get(this, "isDirty");
  }),
  
  isModern: computed("isDirty", "model.length", function() {
    return get(this, "model.length") < 1 || get(this, "isDirty");
  })
}