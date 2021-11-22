import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

export default function ProdductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { title } = useParams();
  return (
    <div>
      {id}
      {title}
      product Detail Page!
    </div>
  );
}
