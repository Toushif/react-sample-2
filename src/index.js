import React from 'react';
import ReactDOM from 'react-dom';

const Root = () => {
    return (
        <React.StrictMode>
            <button>Hi</button>
        </React.StrictMode>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'))