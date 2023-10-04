export type TList = {
  title: string;
  points: string[];
};

interface IListProps {
  list: TList;
}

const List: React.FC<IListProps> = ({ list }) => {
  return (
    <div>
      <p>{list.title}</p>
      <ul className="list-disc">
        {list.points.map((entry, index) => (
          <li key={index} className="ml-8">
            {entry}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
