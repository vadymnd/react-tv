import { useState, useEffect } from "react"

const FetchApiData = (apiUrl, setData) => {

  const [hasError, setErrors] = useState(false);

  console.log(hasError);

  const fetchData = () => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setErrors(err));
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default FetchApiData;
