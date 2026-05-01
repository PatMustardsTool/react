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
                <MyFooter {...{my_timestamp}}/>
                <MyFooter {...{my_timestamp}}/>
                <MyFooter {...{my_timestamp}}/>
                <MyFooter {...{my_timestamp}}/>
                <MyFooter {...{my_timestamp}}/>
                <MyFooter {...{my_timestamp}}/>
                <MyFooter {...{my_timestamp}}/>
            </MyForm>
            <MyFooter {...{my_timestamp}}/>
        </MyContainer>
    </>
);

createRoot(document.getElementById('root')).render(<StrictMode><App/></StrictMode>);
