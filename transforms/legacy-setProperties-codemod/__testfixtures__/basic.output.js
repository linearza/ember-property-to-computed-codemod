import { setProperties } from "@ember/object";
import { get } from "@ember/object";

const myClass = {
  oldSetProps() {
    setProperties(this, {
      propOne: "valOne",
      propTwo: "valTwo",
    })
  },

  newSetProps() {
    setProperties(this, {
      propOne: "valOne",
      propTwo: "valTwo",
    })
  }
}
