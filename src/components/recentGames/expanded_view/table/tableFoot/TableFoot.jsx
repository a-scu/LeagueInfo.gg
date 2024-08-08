import Objectives from "../../Objectives";

const TableFoot = ({ objectives, win, gameStats, team }) => {
  console.log("gameStats:", gameStats);

  return (
    <tfoot
      className={`flex items-center justify-center pb-1 pt-1 border-t ${
        win ? "border-t-blue-2" : "border-t-red-2"
      }`}
    >
      <Objectives objectives={objectives} win={win} />

      <tr className="p-0">
        <td className="p-0">
          <span className="text-gray-6 text-xs">{team.gold}</span>
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFoot;
