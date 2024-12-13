import Link from "next/link";
import styles from "@/styles/Headers.module.css";

export default function Header({ isLoggedIn, logoutUserFunction }) {
  return (
    <header className={styles.Header}>
      <div>
        <div>
          <h1>FACEBOOK</h1>
        </div>
      </div>
      <nav>
        <div className={styles.Nav}>
          <ul>
            {isLoggedIn && (
              <>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <a onClick={logoutUserFunction}>Log out</a>
                </li>
              </>
            )}

            {!isLoggedIn && (
              <>
                <li>
                  <Link href="/create">Create user</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}