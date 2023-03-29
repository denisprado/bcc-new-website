import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import useServiceCategories from "src/hooks/useServicesCategories";
interface LayoutProps {
  children: ReactNode;
}

export default function ServiceLayout({ children }: LayoutProps) {
  const {
    data: serviceCategories,
    isLoading,
    isError,
  } = useServiceCategories();
  const router = useRouter();
  const { categoryId } = router.query;
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="my-4 tabs">
        {serviceCategories?.map((cat) => {
          const tabStyle =
            categoryId === cat.id ? "tab-active text-primary" : "";
          return (
            <a className={`${tabStyle} tab tab-bordered tab-lg`} key={cat.id}>
              <Link href={`${cat.id}`}>{cat.title}</Link>
            </a>
          );
        })}
      </div>
      {children}
    </div>
  );
}
