import { useEffect, useState } from "react";
// import Swal from "sweetalert2";

export const useHttp = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const tablaF = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (error) {
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        // });
      }
    };

    tablaF();
    // eslint-disable-next-line
  }, [url]);
  return [data];
};