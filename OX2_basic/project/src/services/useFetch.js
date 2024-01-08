import { ref } from 'vue';

export const useFetch = (url, method = 'GET', config = {}) => {
  const data = ref(null);
  const response = ref(null);
  const error = ref(null);
  const loading = ref(true);

  const fetchData = async () => {
    try {
      const result = await fetch(url, { method, ...config });
      data.value = await result.json();
      response.value = result;
    } catch (ex) {
      error.value = ex;
    } finally {
      loading.value = false;
    }
  };

  fetchData();
  return { data, response, error, loading, fetch: fetchData };
};
