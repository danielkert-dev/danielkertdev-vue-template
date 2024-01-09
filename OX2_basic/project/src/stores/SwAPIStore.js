import { defineStore } from 'pinia';
import { useFetch } from '../services/useFetch';

export const useSwAPIStore = defineStore('solarwebAPI', {
    state: () => ({
        apiLink: 'https://api.solarweb.com/swqapi/',
        swData: [],
        swResponse: null,
        swError: null,
        swLoading: false,
    }),
    actions: {
        async request(method, uri, params = {}) {
            const url = this.apiLink + uri;
            this.swLoading = true;

            try {
                const { data, response, error, loading } = await useFetch(url, method, {
                    headers: {
                        'AccessKeyId': 'FKIA62FDCB8D17BC4FD1863A5BD8AE836A23',
                        'AccessKeyValue': '7d3034c5-0094-45cb-b0ab-c5ca68dedd48',
                    },
                    ...params,
                });

                this.swData = data;
                this.swResponse = response;
                this.swError = error;
                this.swLoading = loading;

                return { data, response, error, loading };
            } catch (error) {
                this.swError = error;
                this.swLoading = false;
                return { error, loading: false };
            }
        },
        async get(uri, params) {
            return this.request('GET', uri, params);
          },
        async post(uri, params) {
            return this.request('POST', uri, params);
          },
    },
});

/* 
HTTP header example
GET https://api.solarweb.com/swqapi/pvsystems HTTP/1.1
AccessKeyId: FKIAFEF58CFEFA94486F9C804CF6077A01AB
AccessKeyValue: 47c076bc-23e5-4949-37a6-4bcfcf8d21d6
*/