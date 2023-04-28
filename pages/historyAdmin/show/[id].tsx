import { DateField } from "@pankod/refine";
import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Input, Typography } from "antd";

import { IHistory } from "src/interfaces";

const { Title } = Typography;

export default function ServiceShow() {
  const { queryResult } = useShow<IHistory>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Description</Title>
      <Input value={record?.description}></Input>
      <Title level={5}>Data</Title>
      <DateField value={record?.date || "-"} />
    </Show>
  );
}
