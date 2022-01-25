import styles from "./Sidebar.module.css";
import svg1 from "../../../images/fantasy.svg";
import svg2 from "../../../images/heart.svg";
import svg3 from "../../../images/more.svg";
import svg4 from "../../../images/poetry.svg";
import svg5 from "../../../images/science.svg";

const Sidebar = ({ sidebarClickHandler }) => {
  return (
    <div className={styles.sidebar}>
      <div>
        <p className={styles.title}>Categories</p>
        <ul className={styles.categorList}>
          <li
            onClick={() => sidebarClickHandler("fantasy")}
            className={styles.categoryListItem}
          >
            <img className={styles.icon} src={svg1} alt="icon" />
            <p>Fantasy</p>
          </li>
          <li
            onClick={() => sidebarClickHandler("romance")}
            className={styles.categoryListItem}
          >
            <img className={styles.icon} src={svg2} alt="icon" />
            <p>Romance</p>
          </li>
          <li
            onClick={() => sidebarClickHandler("poetry")}
            className={styles.categoryListItem}
          >
            <img className={styles.icon} src={svg4} alt="icon" />
            <p>Poetry</p>
          </li>
          <li
            onClick={() => sidebarClickHandler("fiction")}
            className={styles.categoryListItem}
          >
            <img className={styles.icon} src={svg5} alt="icon" />
            <p>Fiction</p>
          </li>
          <li
            onClick={() => sidebarClickHandler("more")}
            className={styles.categoryListItem}
          >
            <img className={styles.icon} src={svg3} alt="icon" />
            <p>More</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
