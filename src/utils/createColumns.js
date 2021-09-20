import DetailsModal from "../components/features/Detentions/DetailsModal";
import { dateToStringShort } from "./formatDate";

const ModalCell = ({ id }) => <DetailsModal id={id} />;
const DateCell = ({ value }) => dateToStringShort(value);

const detentionHeaders = [
  {
    Header: "Booking Number",
    accessor: "bookinNumber",
    disableFilters: true,
  },
  {
    Header: "Booking Date",
    accessor: "bookingDate",
    disableFilters: true,
    Cell: ({ cell }) => <DateCell value={cell.value} />,
  },
  {
    Header: "Arresting Agency",
    accessor: "arrestingAgency",
  },
  {
    Header: "",
    accessor: "_id",
    disableFilters: true,
    Cell: ({ cell }) => <ModalCell id={cell.value} />,
  },
];

const personsHeaders = [
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Race",
    accessor: "race",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Height",
    accessor: "height",
    disableFilters: true,
  },
  {
    Header: "Weight",
    accessor: "weight",
    disableFilters: true,
  },
];

const createColumns = (location) =>
  location === "/detentions" ? detentionHeaders : personsHeaders;

export default createColumns;
