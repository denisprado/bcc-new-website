import { IHistory } from "src/interfaces";

import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
  DateField,
} from "@refinedev/antd";
import { Space, Table } from "antd";

export default function ServicesEdit() {
  const { tableProps } = useTable<IHistory>({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        {/* <Table.Column dataIndex="id" title="ID" /> */}

        <Table.Column
          dataIndex="date"
          title="Data"
          render={(value) => <DateField value={value} format="YYYY" />}
          sorter
        />
        <Table.Column dataIndex="description" title="Descrição" />

        <Table.Column<IHistory>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
