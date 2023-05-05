import { getProperties } from "@ember/object";
import { setProperties } from "@ember/object";

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
