import './App.css';
import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';

import {my_header_dict, my_timestamp} from './modules/config.js';

import {MyHeader} from './components/MyHeader/MyHeader.jsx';
import {MyContainer} from './components/MyContainer/MyContainer.jsx';
import {MyForm} from './components/MyForm/MyForm.jsx';
import {MyFooter} from './components/MyFooter/MyFooter.jsx';

export const App = () => (
    <>
        <MyHeader {...{my_header_dict}} />
        <MyContainer>
            <MyForm>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
            </MyForm>
            <MyFooter {...{my_timestamp}}/>
        </MyContainer>
    </>
);

createRoot(document.getElementById('root')).render(<StrictMode><App/></StrictMode>);
