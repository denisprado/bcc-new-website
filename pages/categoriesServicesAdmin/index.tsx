import { IServiceCategory } from "src/interfaces";

import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { Space, Table } from "antd";

export default function ServicesEdit() {
  const { tableProps } = useTable<IServiceCategory>({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        {/* <Table.Column dataIndex="id" title="ID" /> */}

        <Table.Column dataIndex="title" title="Content" />
        <Table.Column<IServiceCategory>
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
