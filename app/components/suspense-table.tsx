'use client'

import "ka-table/style.css";

import React, { useState } from 'react';

import { ITableProps, kaReducer, Table } from 'ka-table';
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
];

const SuspenseTable: React.FC = () => {
  const [tableData, setTableData] = useLocalStorage(LOCAL_STORAGE_KEY, [blankRow]);

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
    />
  );
};

export default SuspenseTable;

