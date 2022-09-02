import React from "react";
import ReactDOM  from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from './routes/App';

/**ReactDOM.hydrate(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,

    document.getElementById('app'),
);**/

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
    <React.StrictMode>
       
        <BrowserRouter>
            <App />
        </BrowserRouter>
               
    </React.StrictMode>

    
);


//ReactDOM.render(<App />, document.getElementById('app'));