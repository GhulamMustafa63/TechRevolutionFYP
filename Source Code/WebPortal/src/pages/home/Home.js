import styles from "./Home.module.css";
import TransactionForm from "./UploadFrom";

import { useAuthContext } from "../../hooks/useAuthContext";

import ProductList from "./ProductList";

export default function Home() {
  const { user } = useAuthContext();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ProductList />
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
