import TecnoIcon from '../components/icons/TecnoIcon'
import CategoryIcon from '../components/icons/CategoryIcon'
import ItemsIcon from '../components/icons/ItemsIcon'

const sidebarDataList = [
  {
    id: 0,
    label: "Sokajy",
    Icon: <CategoryIcon currentColor="stroke-white" />
  },
  {
    id: 1,
    label: "Tekno",
    Icon: <TecnoIcon currentColor="stroke-white" />
  },
  {
    id: 2,
    label: "Singa rehetra",
    Icon: <ItemsIcon currentColor="stroke-white" />
  }
];

export {
  sidebarDataList
}