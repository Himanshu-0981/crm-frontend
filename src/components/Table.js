import React from "react";
import { CiEdit } from "react-icons/ci";

function Table({ columns, data, showCheckbox = false, actions }) {
  return (
    <>
      <div className="relative overflow-x-auto sm:rounded-lg font-open-sans ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              {showCheckbox && <th scope="col" className="p-4"></th>}
              {columns.map((column) => (
                <th key={column.key} scope="col" className="px-6 py-3">
                  {column.title}
                </th>
              ))}
              {actions && <th scope="col">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-white border-b hover:bg-gray-50">
                {showCheckbox && (
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id={`checkbox-table-row-${rowIndex}`}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </div>
                  </td>
                )}
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4">
                    {row[column.key]}
                  </td>
                ))}
                {actions && (
                  <td>
                    {actions.map((action) => (
                      <span
                        key={action.key}
                        onClick={() => action.onClick(row)}
                        className="cursor-pointer text-blue-600 hover:underline mr-2"
                      >
                        {action.label}
                      </span>
                    ))}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination or other navigation can be added here */}
      </div>
    </>
  );
}

export default Table;
