import { MarkdownField, Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Image, Typography } from "antd";

import { IPosts } from "src/interfaces";

const { Title, Text } = Typography;

export default function BlogPostShow() {
  const { queryResult } = useShow<IPosts>();
  const { data, isLoading } = queryResult;
  const record = data?.data;
  const url = record ? JSON.parse(record?.image) : "";
  console.log(url[0]?.url);
  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Title</Title>
      <Text>{record?.title || "-"}</Text>

      <Title level={5}>Description</Title>
      <MarkdownField value={record?.description || "-"} />

      <Title level={5}>Description</Title>
      <MarkdownField value={record?.description || "-"} />

      <Title level={5}>Images</Title>
      <Image src={url[0]?.url} alt="" width={300} />
    </Show>
  );
}
