import { setProperties, getProperties } from "@ember/object";

const myClass = {
  propertyChanged: (function() {
    return Em.run.debounce(this, () => {
      this.doSomething()
    }, 300);
  }).observes("arrayProps.@each.value", "anotherProp", "thirdOne"),
}