import { useNavigate } from "react-router";
import notFound from "./PageNotFound.module.css";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <article className={notFound.pageNotFound}>
      <h1 className={notFound.pageNotFound__title}>Page not found</h1>
      <p className={notFound.pageNotFound__text}>
        I dont know where you searching for, just return
      </p>
      <button
        onClick={() => navigate("/")}
        className={notFound.pageNotFound__button}
      >
        Return
      </button>
    </article>
  );
};

export default PageNotFound;
