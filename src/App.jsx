import my_logo from './assets/logo.jpg';
import my_reset_icon from './assets/reset.svg';

import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';
import {MyHeader} from './components/MyHeader/MyHeader.jsx';
import {MyForm} from './components/MyForm/MyForm.jsx';
import {MyFooter} from './components/MyFooter/MyFooter.jsx';

import './App.css';

const my_title = 'My React Web App';

export const App = () => (
    <>
        <MyHeader {...{ my_title, my_logo, my_reset_icon }} />
        <MyForm></MyForm>
        <MyFooter />
    </>
);

createRoot(document.getElementById('root')).render(<StrictMode><App/></StrictMode>);
