import styles from "./TextList.module.scss";

const TextList = ({ title, list = [] }) => {
  return (
    <div>
      <ul className={styles.title}>
        {list.map((item, index) => (
          <li key={`_list_${index}`} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextList;
