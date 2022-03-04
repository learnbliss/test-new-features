import styles from './BackDrop.module.css'

interface BackDropProps {

}

const BackDrop: React.FC<BackDropProps> = ({children}) => {
    return (
        <div className={styles.backDrop}>
            {children}
        </div>
    );
};

export default BackDrop;
