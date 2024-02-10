import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAll, selectItem, unSelectAll } from "./redux/selectedItemsSlice";
import { SelectedItemsList } from "./components/SelectedItemsList";
import { Button } from "./components/Button";
import { ListItem } from "./components/ListItem";
import "./style.css";
import { RootState } from "./redux/store";

interface Item {
  name: string;
  color: string;
}

interface AppProps {
  items: Item[];
}

const App: React.FC<AppProps> = ({ items = [] }) => {
  const selectedItems = useSelector(
    (state: RootState) => state.selectedItemsSlice.items
  );
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Button
        onClick={() => {
          items.forEach((item) => dispatch(selectAll({ item: item.name })));
        }}
      >
        Select All
      </Button>
      <Button
        onClick={() => {
          dispatch(unSelectAll());
        }}
      >
        Unselect All
      </Button>
      <SelectedItemsList>
        {selectedItems?.map((item) => (
          <li key={item} className="SelectedItemsList__item">
            {item}
          </li>
        ))}
      </SelectedItemsList>
      <ul className="List">
        {items.map((item) => (
          <ListItem
            onClick={() => {
              dispatch(selectItem({ item: item.name }));
            }}
            key={item.name}
            className={`List__item List__item--${item.color} ${
              selectedItems?.includes(item.name) ? "List__item--selected" : ""
            }`}
          >
            {item.name}
          </ListItem>
        ))}
      </ul>
    </Fragment>
  );
};

export default App;
