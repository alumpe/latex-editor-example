import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

import "./editorStyles.css";
import { Button } from "@mui/material";

const editorOptions = {
  width: "100%",
  height: "100%",
  wrapEnabled: true,
  mode: "java",
  theme: "github",
  name: "UNIQUE_ID_OF_DIV",
  editorProps: { $blockScrolling: true },
};

export const EditorComponent = () => {
  return (
    <div className="editor-container">
      <div className="editor-toolbar">
        <Button variant="contained" onClick={() => alert("Clicked!")}>
          Recompile
        </Button>
      </div>

      <div style={{ flexGrow: 1 }}>
        <AceEditor {...editorOptions} />
      </div>
    </div>
  );
};
