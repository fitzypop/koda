/* // TODO Current thoughts
- Will need a mutlitude of overlays and conditionally hidden components
- Need a 'margin-view-overlay' aka line numbers and gutter
  - folding groups with the chevrons can come later
- Need tab grouping of editors
- Need file bar tab
*/

// I'm thinking this should be the current top level?
export default function EditorWindow() {
  return (
    <>
      <pre>
        <textarea name="main-editor" id="main-editor" cols="30" rows="10" />
      </pre>
    </>
  );
}

export function EditorGroup() {
  return <></>;
}

export function EditorMargin() {
  return <></>;
}
