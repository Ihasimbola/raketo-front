import { useRef } from 'react';
import './App.scss';
import { Button } from './components/Button/Button';
import Input from './components/Input/Input';
import Text from './components/Text/Text';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="App">
      <Text
        as="h1"
        color="light-800"
        size="2xl"
      >
        Title
      </Text>
      <div className="flex flex-row gap-1">
        <Button size="default" variant="default">Any text</Button>
        <Button size="default" variant="outline">Any text</Button>
        <Button size="default" variant="primary">Any text</Button>
        <Button size="default" variant="secondary">Any text</Button>
        <Button size="default" variant="danger">Any text</Button>
        <Button size="default" variant="gray">Any text</Button>
      </div>
      <Input variant="primary" placeholder='Username' ref={inputRef} />
      <Text
        color="light-600"
        size="base"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, commodi! Dolore nulla non officia id voluptatibus doloremque unde enim pariatur nemo labore dolor tempora aperiam fuga, rem deleniti eius expedita.
      </Text>

      
    </div>
  );
}

export default App;
