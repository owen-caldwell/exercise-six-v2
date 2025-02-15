import styles from "@/styles/Forms.module.css";

export default function LoginForm({ loginUserFunction }) {
  return (
    <div className={styles.Page}>
      <form
        className={styles.Form}
        onSubmit={(e) => loginUserFunction(e)}
      >
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" />

        <button type="submit">Login User</button>
      </form>
    </div>
  );
}