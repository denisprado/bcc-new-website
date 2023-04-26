import { IPostCategory, IPosts, IServiceCategory } from "src/interfaces";
import { BaseKey, useMany } from "@refinedev/core";

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

  const categoryIds = tableProps?.dataSource?.map(
    (item) => item.id_post_category
  ) ?? [""];
  const serviceCategoryIds = tableProps?.dataSource?.map(
    (item) => item.id_service_category
  ) ?? [""];

  const { data, isLoading } = useMany<IPostCategory>({
    resource: "PostCategories",
    ids: categoryIds as BaseKey[],
    queryOptions: {
      enabled: categoryIds.length > 0,
    },
  });

  const { data: serviceCatData, isLoading: serviceDataisLoading } =
    useMany<IServiceCategory>({
      resource: "ServiceCategories",
      ids: serviceCategoryIds as BaseKey[],
      queryOptions: {
        enabled: serviceCategoryIds.length > 0,
      },
    });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        {/* <Table.Column dataIndex="id" title="ID" /> */}
        <Table.Column
          dataIndex="featured"
          title="Fixado"
          sorter
          render={(value: string) => <BooleanField value={value} />}
        />
        <Table.Column
          dataIndex={"id_post_category"}
          title="Categoria"
          sorter
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
        <Table.Column
          dataIndex={"id_service_category"}
          title="Público"
          sorter
          render={(value) => {
            if (serviceDataisLoading) {
              return <TextField value="Loading..." />;
            }

            return (
              <TagField
                value={
                  serviceCatData?.data.find((item) => item.id === value)?.title
                }
              />
            );
          }}
        />
        <Table.Column dataIndex="title" title="Título" />
        <Table.Column dataIndex="client" title="Cliente" />
        <Table.Column dataIndex="url" title="Link" />
        <Table.Column dataIndex="year" title="Ano" filterDropdown />
        <Table.Column dataIndex="description" title="Descrição" />
        {/* <Table.Column
          dataIndex="image"
          title="Image"
          render={(image) => {
            return <Image alt={image.name} src={image.url} />;
          }}
        /> */}
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
