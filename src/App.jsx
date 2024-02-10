import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectItem } from "./redux/selectedItemsSlice";
import { SelectedItemsList } from "./components/SelectedItemsList";
import "./style.css";

export const App = ({ items = [] }) => {
  const selectedItems = useSelector((state) => state.selectedItemsSlice.items);

  const dispatch = useDispatch();

  return (
    <Fragment>
      <SelectedItemsList>
        {selectedItems.map((item) => (
          <li key={item} className="SelectedItemsList__item">
            {item}
          </li>
        ))}
      </SelectedItemsList>
      <ul className="List">
        {items.map((item) => (
          <li
            onClick={() => {
              dispatch(selectItem({ item: item.name }));
            }}
            key={item.name}
            className={`List__item List__item--${item.color} ${
              selectedItems.includes(item.name) ? "List__item--selected" : ""
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
