import { get } from "@ember/object";

const myClass = {
  oldGetter: computed("myProp", function() {
    return this.set("myProp").length < 1;
  }),
  
  newGetter: computed("myProp", function() {
    return set(this, "myProp").length < 1;
  }),
}
