import styles from './LayoutPage.module.scss';
import AppNav from "../../layout/AppNav";

const Layout = ({children}) => {
    return (
        <>
            <AppNav/>
            <div className={styles.container}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </>
    );
}

const withLayout = (ComponentToWrap) => (props) => (
    <Layout>
        <ComponentToWrap {...props} />
    </Layout>
);

export default Layout;

export {
    withLayout,
};