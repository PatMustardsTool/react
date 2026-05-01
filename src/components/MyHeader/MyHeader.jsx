import my_styles from './MyHeader.module.css';

export const MyHeader = ({my_header_dict}) => (
    <div className={my_styles.header_row}>
        <img className={my_styles.menu_icon} src={my_header_dict.menu_icon} alt='reset' />
        <img className={my_styles.logo} src={my_header_dict.logo} alt='logo' />
        <img className={my_styles.reload_icon} src={my_header_dict.reload_icon} alt='reset' />
    </div>
);