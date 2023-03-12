// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use rusqlite::Connection;

fn main() {
    // TODO How do I open files relative to home and or XDG?
    // let conn = Connection::open("$HOME/.cache/db.db").expect("sqlite fail");

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, rust_pwd, open_devtools])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn open_devtools(window: tauri::Window) {
    window.open_devtools();
}

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    // dbg!(name);
    format!("Hello, {}! You've been greeted from Rust!", name)
}

/// Trying to print rust's working dir.
#[tauri::command]
fn rust_pwd() -> String {
    let pdir = std::env::current_dir().unwrap();
    // dbg!(&pdir);
    pdir.into_os_string().into_string().unwrap()
}
