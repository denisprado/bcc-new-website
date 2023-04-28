import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Input, Typography } from "antd";

import { IServiceCategory } from "src/interfaces";

const { Title } = Typography;

export default function ServiceShow() {
  const { queryResult } = useShow<IServiceCategory>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Description</Title>
      <Input value={record?.title || "-"} />
    </Show>
  );
}
