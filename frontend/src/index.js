import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";

const container = document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <App /> }>
            </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,container);

// ReactDOM.render(<App />, document.getElementById('root'));

