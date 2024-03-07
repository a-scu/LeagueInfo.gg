import Objectives from "../../Objectives";

const TableFoot = ({ objectives, win }) => {
  return (
    <tfoot className="flex items-center justify-center h-6 bg-main-1 dark:bg-main-2">
      <Objectives objectives={objectives} win={win} />
    </tfoot>
  );
};

export default TableFoot;
