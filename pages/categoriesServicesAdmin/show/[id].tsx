import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Input, Typography, Image } from "antd";

import { IServiceCategory } from "src/interfaces";

const { Title } = Typography;

export default function ServiceShow() {
  const { queryResult } = useShow<IServiceCategory>();
  const { data, isLoading } = queryResult;
  const record = data?.data;
  const url = record ? JSON.parse(record?.image) : "";
  console.log(url);
  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Título</Title>
      <Input value={record?.title || "-"} disabled />

      <Title level={5}>Descrição</Title>
      <Input value={record?.description || "-"} disabled />

      <Title level={5}>Imagem</Title>
      <Image src={url[0]?.url} alt="" width={300} />
    </Show>
  );
}
