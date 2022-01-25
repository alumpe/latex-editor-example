import "./App.css";
import { EditorComponent } from "./editor/Editor";
import { TabsComponent } from "./tabs/Tabs";

export const App = () => {
  return (
    <div className="App">
      <EditorComponent />
      <TabsComponent />
    </div>
  );
};
