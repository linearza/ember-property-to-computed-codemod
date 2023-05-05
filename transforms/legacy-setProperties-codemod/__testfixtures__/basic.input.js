import { get } from "@ember/object";

const myClass = {
  oldSetProps() {
    this.setProperties({
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
