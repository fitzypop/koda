import { Component, createSignal } from "solid-js";
// import logo from "./assets/logo.svg";
import { invoke } from "@tauri-apps/api/tauri";
import EditorWindow from "./components/editor";
import { rwd } from "./stores/state";

export function Container(props) {
  return (
    <div class="flex flex-col justify-center text-center">{props.children}</div>
  );
}

export function Row(props) {
  return <div class="flex justify-center">{props.children}</div>;
}

export default function App() {
  const [greetMsg, setGreetMsg] = createSignal("");
  const [name, setName] = createSignal("");

  invoke("open_devtools");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name: name() }));
  }
  return (
    <div class="pt-5 m-0">
      <Container>
        <h1>Welcome to Tauri!</h1>

        <Row>
          <p>Current working directory for rust 'backend': {rwd()}</p>
        </Row>

        <Row>
          <div>
            <input
              id="greet-input"
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="Enter a name..."
            />
            <button type="button" onClick={() => greet()}>
              Greet
            </button>
          </div>
        </Row>

        <Row>
          <p>{greetMsg()}</p>
        </Row>

        <EditorWindow />
      </Container>
    </div>
  );
}
