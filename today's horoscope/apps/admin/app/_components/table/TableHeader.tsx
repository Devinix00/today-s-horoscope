import React from 'react';

interface TabHeaderProps {
  content?: string;
}

function TableHeader({ content }: TabHeaderProps) {
  return (
    <th className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-md font-semibold text-gray-600 uppercase tracking-wider text-center">
      {content}
    </th>
  );
}

export default TableHeader;
