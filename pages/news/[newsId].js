import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  console.log(router.query.newsId);
  return (
    <div>
      <p>{router.query.newsId} Page</p>
    </div>
  );
};
export default DetailPage;
