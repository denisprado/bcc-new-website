import { BaseKey, useMany } from "@refinedev/core";
import { IServiceCategory, IServices } from "src/interfaces";

import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  TagField,
  TextField,
  useTable,
} from "@refinedev/antd";
import { Space, Table } from "antd";

export default function ServicesEdit() {
  const { tableProps } = useTable<IServices>({
    syncWithLocation: true,
  });

  const categoryIds = tableProps?.dataSource?.map(
    (item) => item.id_category_service
  ) ?? [""];

  console.log(categoryIds);

  const { data, isLoading } = useMany<IServiceCategory>({
    resource: "ServiceCategories",
    ids: categoryIds as BaseKey[],
    queryOptions: {
      enabled: categoryIds.length > 0,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        {/* <Table.Column dataIndex="id" title="ID" /> */}

        <Table.Column
          dataIndex={"id_category_service"}
          title="Category"
          render={(value) => {
            if (isLoading) {
              return <TextField value="Loading..." />;
            }

            return (
              <TagField
                value={data?.data.find((item) => item.id === value)?.title}
              />
            );
          }}
        />
        <Table.Column dataIndex="description" title="Content" />
        <Table.Column<IServices>
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
