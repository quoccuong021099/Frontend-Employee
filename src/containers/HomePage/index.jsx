import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllEmployees } from "../../redux/actions/employee";

export default function index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmployees());
  }, []);
  return <div>HomePage</div>;
}
