import Objectives from "../../Objectives";
import coins from "@/assets/images/money.png";

const TableFoot = ({ objectives, win, gameStats, team }) => {
  if (objectives)
    return (
      <tfoot
        className={`flex items-center justify-center pb-1 pt-1 border-t ${
          win ? "border-t-blue-2" : "border-t-red-2"
        }`}
      >
        <Objectives objectives={objectives} win={win} />
      </tfoot>
    );
};

export default TableFoot;
