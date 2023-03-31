import usePublicUrlImage from "src/hooks/usePublicUrlImage";
import Image from "next/image";

const ImageTest = () => {
  const { data: image } = usePublicUrlImage(
    "299b2db8-7bdf-4a4c-bff7-5ca252d15c6f"
  );
  console.log("publicUrl", image?.data.publicUrl);
  return (
    <Image
      src={image ? image?.data.publicUrl : ""}
      alt={""}
      width={50}
      height={50}
    ></Image>
  );
};

export default ImageTest;

ImageTest.noLayout = true;
