import { MarkdownField, Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

import { IServices } from "src/interfaces";

const { Title } = Typography;

export default function ServiceShow() {
  const { queryResult } = useShow<IServices>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Description</Title>
      <MarkdownField value={record?.description || "-"} />
    </Show>
  );
}
