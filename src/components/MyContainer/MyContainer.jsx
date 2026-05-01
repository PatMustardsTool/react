import my_styles from './MyContainer.module.css';

export const MyContainer = ({children}) => (
    <div className={my_styles.container}>
        {children}
    </div>
);