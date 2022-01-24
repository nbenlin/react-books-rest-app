import styles from "./Sidebar.module.css";
// import { FaHatWizard as WizardIcon } from "react-icons/fa";
// import {
//   GiOppositeHearts as HeartsIcon,
//   GiClover as LoverIcon,
//   GiMaterialsScience as ScienceIcon,
// } from "react-icons/gi";
// import { CgMoreAlt as MoreIcon } from "react-icons/cg";

const Sidebar = ({ sidebarClickHandler }) => {
  return (
    <div className={styles.sidebar}>
      <p className={styles.title}>pick a book for yourself</p>
      <div>
        <p className={styles.title}>Categories</p>
        <ul className={styles.categorList}>
          <li
            onClick={() => sidebarClickHandler("fantasy")}
            className={styles.categoryListItem}
          >
            {/* <WizardIcon className="styles.icon" /> */}
            <p>Fantasy</p>
          </li>
          <li
            onClick={() => sidebarClickHandler("romance")}
            className={styles.categoryListItem}
          >
            {/* <HeartsIcon className="styles.icon" /> */}
            <p>Romance</p>
          </li>
          <li
            onClick={() => sidebarClickHandler("poetry")}
            className={styles.categoryListItem}
          >
            {/* <LoverIcon /> */}
            <p>Poetry</p>
          </li>
          <li
            onClick={() => sidebarClickHandler("fiction")}
            className={styles.categoryListItem}
          >
            {/* <ScienceIcon /> */}
            <p>Fiction</p>
          </li>
          <li
            onClick={() => sidebarClickHandler("more")}
            className={styles.categoryListItem}
          >
            {/* <MoreIcon /> */}
            <p>More</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
