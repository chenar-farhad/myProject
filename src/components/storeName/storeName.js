import React from "react";
import { useGetStoreNameQuery } from "../../services/app.api";
import { Button } from "antd";

export default function storeName() {
    const { data, error, isLoading, isSuccess, isError } = useGetStoreNameQuery();
    return (
    <div className="iProductCards">
      {isLoading && "Loading..."}
      {isError && error.message}
      {isSuccess &&
        data &&
        data.map((e, index) => {
          return (
            <>
              <Button>{e.storeName}</Button>
            </>
          );
        })}
    </div>
  );
}
