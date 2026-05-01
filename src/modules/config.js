import my_logo from '../assets/logo.jpg';
import my_menu_icon from '../assets/Neuicons Oval Line Icons/hamburger-menu-svgrepo-com.svg'
import my_reload_icon from '../assets/Neuicons Oval Line Icons/reload-ui-svgrepo-com.svg'

export const my_header_dict = {
    title: import.meta.env.VITE_TITLE,
    logo: my_logo,
    reload_icon: my_reload_icon,
    menu_icon: my_menu_icon
};

export const my_timestamp = import.meta.env.VITE_TIMESTAMP