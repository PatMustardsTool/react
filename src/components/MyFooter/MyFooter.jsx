import my_styles from './MyFooter.module.css';

export const MyFooter = ({my_timestamp}) => (
    <div className={my_styles.footer}>{my_timestamp}</div>
);