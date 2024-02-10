import { ReactNode } from "react";

interface SelectedItemsListProps {
  children: ReactNode;
}

const SelectedItemsList: React.FC<SelectedItemsListProps> = ({ children }) => {
  return <div>{children}</div>;
};

export { SelectedItemsList };
