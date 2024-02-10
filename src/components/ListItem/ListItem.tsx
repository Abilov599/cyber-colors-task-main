import { ReactNode } from 'react';

interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
 
}

const ListItem: React.FC<ListItemProps> = ({ children, ...props }) => {
  return <li {...props}>{children}</li>;
};

export { ListItem };
