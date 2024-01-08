import { defineStore } from 'pinia';
import { useFetch } from '../services/useFetch';

export const useWpAPIStore = defineStore('wordpressAPI', {
  state: () => ({
    apiLink: 'https://www.datanom.ax/~kjell/ox2/wp-json/wp/v2/',
    wpData: [],
    wpResponse: null,
    wpError: null,
    wpLoading: false,
  }),
  actions: {
    async request(method, uri, params = {}) {
      const url = this.apiLink + uri;
      this.wpLoading = true;

      try {
        const { data, response, error, loading } = await useFetch(url, method, {
          headers: {
            'Content-Type': 'application/json',
          },
          ...params,
        });

        this.wpData = data;
        this.wpResponse = response;
        this.wpError = error;
        this.wpLoading = loading;

        return { data, response, error, loading };
      } catch (error) {
        this.wpError = error;
        this.wpLoading = false;
        return { error, loading: false };
      }
    },
    async get(uri, params) {
      return this.request('GET', uri, params);
    },
    async post(uri, params) {
      return this.request('POST', uri, params);
    },
    async head(uri, params) {
      return this.request('HEAD', uri, params);
    },
  },
});
