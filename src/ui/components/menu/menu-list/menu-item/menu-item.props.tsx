export interface MenuItemProps {
  href?: string;
  active?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => void;
}
