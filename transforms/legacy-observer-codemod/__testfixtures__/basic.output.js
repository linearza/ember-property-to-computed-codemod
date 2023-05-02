import { observer } from "@ember/object";
const myClass = {
  propertyChanged: observer("arrayProps.@each.value", "anotherProp", "thirdOne", function() {
    return Em.run.debounce(this, () => {
      this.doSomething()
    }, 300);
  }),
}