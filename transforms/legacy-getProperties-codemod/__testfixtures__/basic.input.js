import { setProperties } from "@ember/object";
import { alias } from "@ember/object";

const myClass = {
  oldGetProps() {
    this.getProperties({
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
