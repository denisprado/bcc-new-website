import { MarkdownField, Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

import { IPosts } from "src/interfaces";

const { Title, Text } = Typography;

export default function BlogPostShow() {
  const { queryResult } = useShow<IPosts>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Title</Title>
      <Text>{record?.title || "-"}</Text>

      <Title level={5}>Description</Title>
      <MarkdownField value={record?.description || "-"} />

      <Title level={5}>Description</Title>
      <MarkdownField value={record?.description || "-"} />

      <Title level={5}>Images</Title>
    </Show>
  );
}
