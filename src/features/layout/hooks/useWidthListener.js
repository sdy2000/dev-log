import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../context/features/modal/modal-slice";

export default function useWidthListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        dispatch(closeModal(""));
      }
    });
  }, [dispatch]);
}
