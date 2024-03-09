"use client";

const UpdateButton = () => {
  const handleRefresh = () => {
    console.log("recargando");
  };

  return (
    <button
      onClick={handleRefresh}
      className="flex items-center text-white justify-center w-24 max-800:w-20 h-8 mt-1.5 text-sm max-800:text-xs text-center rounded bg-db-500"
    >
      Update
    </button>
  );
};

export default UpdateButton;
