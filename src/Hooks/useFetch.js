import React from 'react'

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function request(url, options) {
    let response;
    let json;

    try {
      setError(null);
      setLoading(true);

      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);

    } catch (err) {
      setError(err.message);
      json = null;
    } finally {
      setLoading(false);
      setData(json);
    }
    return {response, json};
  }
  return {
    data,
    error,
    loading,
    request
  }
}

export default useFetch