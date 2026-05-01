import my_styles from './MyRow.module.css';

export const MyRow = ({children}) => (
    <div className={my_styles.row}>
        {children}AAA
    </div>
);