import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    render() {
        return (
            <Route path='/index.html' exact={true} component={Home} />
        );
      };
//   return (
//     <div>
//         <p>hello</p>
//       <Route path='/index.html' exact={true} component={Home} />
//     </div>
//   );
}

export default App;