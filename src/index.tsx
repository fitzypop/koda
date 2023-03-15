/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";
import "./styles.css";
import "./tailwind.css";

render(() => <App />, document.getElementById("root") as HTMLElement);
