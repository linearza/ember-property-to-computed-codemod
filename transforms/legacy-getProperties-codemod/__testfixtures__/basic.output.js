import { setProperties, getProperties } from "@ember/object";
import { alias } from "@ember/object";

const myClass = {
  oldGetProps() {
    getProperties(this, {
      propOne: "valOne",
      propTwo: "valTwo",
    })
  },

  newGetProps() {
    getProperties(this, {
      propOne: "valOne",
      propTwo: "valTwo",
    })
  }
}
