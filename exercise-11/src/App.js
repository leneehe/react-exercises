import './App.css';
import { useToggle } from './useToggle';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {Cat} from './components/Cat'

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  const [isVisible, setIsVisible] = useToggle(false)
  const [isVisible2, toggle] = useToggle()
  return (
    <div className="App">
        <button onClick={setIsVisible}>   
          {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <h1>Hidden text</h1>}

        <button onClick={toggle}>   
          {isVisible2 ? "Hide" : "Show"}
        </button>
        {isVisible2 && <h1>Hidden text</h1>}

        <br/>
        <br/>
        <QueryClientProvider client={client}>
          <Cat />
        </QueryClientProvider>
    </div>
  );
}

export default App;
