import my_styles from './MyHeader.module.css';

export const MyHeader = ({my_title, my_logo, my_reset_icon}) => (
    <div className={my_styles.header_row}>
        <img className={my_styles.logo} src={my_logo} alt='logo' />
        <span className={my_styles.header}>{my_title}</span>
        <img className={my_styles.reset_icon} src={my_reset_icon} alt='reset' />
    </div>
);