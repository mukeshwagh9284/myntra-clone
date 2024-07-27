import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActtion } from "../store/itemSlice";
import { fetchStetusAcction } from "../store/fetchstetusSlice";
const Fetchitems = () => {
  const fetchStetus = useSelector((store) => store.fetchStetus);

  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStetus.fetchDone) return;
    // const controller = new AbortController();
    // const signal = controller.signal;
    dispatch(fetchStetusAcction.markFetchingStart());
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStetusAcction.markFetchdone());
        dispatch(fetchStetusAcction.markFetchingFinished());
        dispatch(itemsActtion.addInitialitems(items[0]));

        // addPostList(data.posts);
        // setloder(false);
      });

    // return () => {
    //   console.log("cleaning up");
    //   controller.abort();
    // };
  }, [fetchStetus, dispatch]);

  return (
    <>
      {/* Fetch Done:{fetchStetus.fetchDone}
      Currantly Fetching:{fetchStetus.currentFetching} */}
    </>
  );
};

export default Fetchitems;
