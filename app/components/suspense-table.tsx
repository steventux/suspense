'use client'

import "ka-table/style.css";

import React, { useState } from 'react';

import { ITableProps, kaReducer, Table } from 'ka-table';
import { ICellEditorProps, ICellTextProps, IHeadCellProps } from 'ka-table/props';
import { deleteRow, hideNewRow, saveNewRow, showNewRow } from 'ka-table/actionCreators';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
import { DispatchFunc } from 'ka-table/types';

import { useLocalStorage } from './../lib/useLocalStorage';

const LOCAL_STORAGE_KEY = 'SuspenseTableData';

const blankRow = {
  profile: 'Bike name or profile',
  forkLsc: '0',
  forkHsc: '0',
  forkLsr: '0',
  forkHsr: '0',
  shockLsc: '0',
  shockHsc: '0',
  shockLsr: '0',
  shockHsr: '0',
  id: 0,
};

const columns = [
  { key: 'profile', title: 'Profile', dataType: DataType.String, width: '30%' },
  { key: 'forkLsc', title: 'Fork LSC', dataType: DataType.String },
  { key: 'forkHsc', title: 'Fork HSC', dataType: DataType.String },
  { key: 'forkLsr', title: 'Fork LSR', dataType: DataType.String },
  { key: 'forkHsr', title: 'Fork HSR', dataType: DataType.String },
  { key: 'shockLsc', title: 'Shock LSC', dataType: DataType.String },
  { key: 'shockHsc', title: 'Shock HSC', dataType: DataType.String },
  { key: 'shockLsr', title: 'Shock LSR', dataType: DataType.String },
  { key: 'shockHsr', title: 'Shock HSR', dataType: DataType.String },
  { key: 'actions', style: {width: 80}},
];

const SuspenseTable: React.FC = () => {
  const [tableData, setTableData] = useLocalStorage(LOCAL_STORAGE_KEY, [blankRow]);

  let maxValue = Math.max(...tableData.map(i => i.id));
  const generateNewId = () => {
    maxValue++;
    return maxValue;
  };
  const AddButton: React.FC<IHeadCellProps> = ({
    dispatch,
  }) => {
   return (
    <div className='plus-cell-button'>
      <img
        src='static/icons/plus.svg'
        alt='Add New Row'
        title='Add New Row'
        onClick={() => dispatch(showNewRow())}
      />
    </div>
   );
  };

  const DeleteRow: React.FC<ICellTextProps> = ({
    dispatch, rowKeyValue,
  }) => {
    return (
      <img
        src='static/icons/delete.svg'
        className='delete-row-column-button'
        onClick={() => dispatch(deleteRow(rowKeyValue))}
        alt=''
      />
    );
  };

  const RemoveButton: React.FC<ICellEditorProps> = ({
    dispatch
  }) => {
    return (
      <img
        src='static/icons/close.svg'
        className='close-cell-button'
        alt='Cancel'
        title='Cancel'
        onClick={() => dispatch(hideNewRow())}
      />
    );
  };

  const SaveButton: React.FC<ICellEditorProps> = ({
    dispatch
  }) => {
    const saveNewData = () => {
      const rowKeyValue = generateNewId();
      dispatch(saveNewRow(rowKeyValue, {
        validate: true
      }));
    };
    return (
      <img
        src='static/icons/save.svg'
        className='mr-4'
        alt='Save'
        title='Save'
        onClick={saveNewData}
      />
    );
  };

  const tablePropsInit: ITableProps = {
    columns: columns,
    data: tableData,
    editingMode: EditingMode.Cell,
    rowKeyField: 'id',
    sortingMode: SortingMode.Single,
  };

  const [tableProps, changeTableProps] = useState(tablePropsInit);

  const dispatch: DispatchFunc = (action) => {
    changeTableProps((prevState: ITableProps) => {
      setTableData(kaReducer(prevState, action).data);
      return kaReducer(prevState, action)
    });
  };

  return (
    <Table
      {...tableProps} // ka-table UI is rendered according to props
      dispatch={dispatch} // dispatch is required for obtain new actions from the UI
      childComponents={{
        cellEditor: {
          content: (props) => {
            if (props.column.key === 'actions'){
              return (
                <div className='justify-center flex cursor-pointer'>
                  <SaveButton {...props}/>
                  <RemoveButton {...props}/>
                </div>
              );
            }
          }
        },
        cellText: {
          content: (props) => {
            if (props.column.key === 'actions') {
              return <DeleteRow {...props}/>;
            }
          }
        },
        headCell: {
          content: (props) => {
            if (props.column.key === 'actions'){
              return <AddButton {...props}/>;
            }
          }
        }
      }}
    />
  );
};

export default SuspenseTable;

