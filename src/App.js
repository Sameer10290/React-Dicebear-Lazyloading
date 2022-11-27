import { Posts } from './Posts';
import { LoadingPosts } from './LoadingPosts';

function App() {
  return (
    <div className="container p-4">
        <Posts />
        <LoadingPosts />
    </div>
  );
}

export default App;
