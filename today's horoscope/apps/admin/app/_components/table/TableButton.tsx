import React, { PropsWithChildren } from 'react';

interface TableButtonProps {
  isClickedButton: boolean;
  onClick: () => void;
}

function TableButton({ children, isClickedButton, onClick }: PropsWithChildren<TableButtonProps>) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 text-white text-md rounded-lg ${isClickedButton ? 'bg-blue-500' : 'bg-gray-400'}`}>
      {children}
    </button>
  );
}

export default TableButton;