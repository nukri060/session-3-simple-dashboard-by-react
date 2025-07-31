import { CounterWidget } from './components/CounterWidget';
import { TextToggleWidget } from './components/TextToggleWidget';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-4xl font-bold text-center text-slate-900 mb-10">
        ჩემი ინტერაქტიული Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <CounterWidget />
        <TextToggleWidget />
      </div>
    </div>
  );
}


export default App
