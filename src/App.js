import "./App.css";
import ZestyExplorer from "./component/ZestyExplorer";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const cookie = getCookie("APP_SID");
console.log(document.cookie, 123123123);

const App = () => <ZestyExplorer cookie={cookie || "darwin"} />;

console.log(window.location, 123123);
export default App;
