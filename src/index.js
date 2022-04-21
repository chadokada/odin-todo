import './styles.css'
import * as UI from "./modules/UI.js"

const inboxBtn = document.querySelector("#inbox")
const todayBtn = document.querySelector("#today");
const upcomingBtn = document.querySelector("#upcoming")

inboxBtn.addEventListener("click", () => UI.showInbox());
todayBtn.addEventListener("click", () => UI.showToday());
upcomingBtn.addEventListener("click", () => UI.showUpcoming());