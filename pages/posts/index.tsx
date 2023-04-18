import { IPostCategory, IPosts } from "src/interfaces";

import { useMany } from "@refinedev/core";

import {
  BooleanField,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  TagField,
  TextField,
  useTable,
} from "@refinedev/antd";
import { Space, Table } from "antd";

export default function BlogPostList() {
  const { tableProps } = useTable<IPosts>({
    syncWithLocation: true,
  });

  const categoryIds = tableProps?.dataSource?.map((item) =>
    item.id_post_category ? item.id_post_category.id : ""
  ) ?? [""];

  const { data, isLoading } = useMany<IPostCategory>({
    resource: "PostCategories",
    ids: categoryIds,
    queryOptions: {
      enabled: categoryIds.length > 0,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        {/* <Table.Column dataIndex="id" title="ID" /> */}
        <Table.Column
          dataIndex="featured"
          title="Fixed in Home"
          render={(value: string) => <BooleanField value={value} />}
        />
        <Table.Column
          dataIndex={"id_post_category"}
          title="Category"
          render={(value) => {
            if (isLoading) {
              return <TextField value="Loading..." />;
            }

            return (
              <TagField
                value={
                  data?.data.find((item) => item.id === value)?.description
                }
              />
            );
          }}
        />
        <Table.Column dataIndex="title" title="Title" />
        <Table.Column dataIndex="description" title="Content" />
        <Table.Column
          dataIndex="image"
          title="Image"
          render={(image) => {
            return <img alt={image.name} src={image.url} />;
          }}
        />
        <Table.Column<IPosts>
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
