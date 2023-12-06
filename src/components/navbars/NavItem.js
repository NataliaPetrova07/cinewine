import Link from "next/link";
import styles from "@/components/navbars/Navbar.module.css";

function NavItem({ href, text, isActive, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Link href={href}>
      <div onClick={handleClick}>
        {text}
        {/* {isActive && <div className={styles.activeIndicator} />} */}
      </div>
    </Link>
  );
}

export default NavItem;
