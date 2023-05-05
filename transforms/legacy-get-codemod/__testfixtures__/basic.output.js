import { get } from "@ember/object";
const myClass = {
  oldGetter: computed("myProp", function() {
    return get(this, "myProp").length < 1;
  }),
  
  newGetter: computed("myProp", function() {
    return get(this, "myProp").length < 1;
  }),
}
