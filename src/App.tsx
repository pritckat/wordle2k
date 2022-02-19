import { useState } from 'react';
import WordRow from './WordRow';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-auto w-96">
      <header className='border-b border-gray-500 pb-2 mb-2 my-2'>
        <h1 className="text-4xl text-center">Wordle 2k</h1>
      </header>

      <main>
        <WordRow letters="hel"/>
        <WordRow letters="hello" />
      </main>
    </div>
  )
}

export default App
