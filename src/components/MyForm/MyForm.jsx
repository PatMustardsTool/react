import my_styles from './MyForm.module.css';

export const MyForm = ({children}) => (
    <form className={my_styles.form}>
        {children}
    </form>
);