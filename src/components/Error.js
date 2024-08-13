import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Error 404</h1>
      <h2>Page not found.</h2>
      <h3>
        {error.status} : {error.statusText}
      </h3>
    </div>
  );
};

export default Error;
