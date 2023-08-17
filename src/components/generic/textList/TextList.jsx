import "./TextList.module.scss";

const TextList = ({ title, list = [] }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {list.map((item, index) => (
          <li key={`_list_${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TextList;
