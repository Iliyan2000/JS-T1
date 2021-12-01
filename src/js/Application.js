import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
	
	this._beat = new Beat();
	this._beat.addEventListener(Beat.events.BIT, text => { console.log(text); });

    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;

    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = "Ah";

    document.querySelector(".main").appendChild(message);

    this.emit(Application.events.READY);
  }
  
  _create() {
	  
  }
}
