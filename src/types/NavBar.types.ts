export interface NavBarItem {
  name: string;
  path: string;
}
export type NavBarProps = {
  navBarItemList: NavBarItem[];
};
