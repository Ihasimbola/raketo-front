import './App.scss';
import { Button } from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className="flex flex-row gap-1">
        <Button size="default" variant="default">Any text</Button>
        <Button size="default" variant="outline">Any text</Button>
        <Button size="default" variant="primary">Any text</Button>
        <Button size="default" variant="secondary">Any text</Button>
        <Button size="default" variant="danger">Any text</Button>
        <Button size="default" variant="gray">Any text</Button>
      </div>
    </div>
  );
}

export default App;
