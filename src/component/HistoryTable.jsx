import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';


export const HistoryTable = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'name',
          headerName: 'name',
          width: 150,
          editable: true,
        },
        {
          field: 'borrowed',
          headerName: 'borrowed',
          width: 150,
          editable: true,
        },
        {
            field: 'lending',
            headerName: 'lending',
            width: 150,
            editable: true,
          },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 110,
          editable: true,
        },
      ];
      
      const rows = [
        { id: 1, name: '信田太郎', borrowed: 'パソコン', lending: '靴', age: 35 },
        { id: 2, name: '小笹新一', borrowed: '７つの習慣', lending: '犬', age: 42 },
        { id: 3, name: '小谷駿', borrowed: 'ワークシフト',age: 45 },
        { id: 4, name: '岩村康二', lending: 'みかん' ,age: 16 },
        { id: 5, name: '鈴木慎二', borrowed: 'リーダブルコード',age: 43 },
        { id: 6, name: '小野達也', age: 150 },
        { id: 7, name: '田上勝二', age: 44 },
        { id: 8, name: '西川隆', age: 36 },
        { id: 9, name: '三浦広太', age: 65 },
      ];
      
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}
