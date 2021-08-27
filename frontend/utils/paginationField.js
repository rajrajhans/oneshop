import { COUNT_NUM_OF_PRODUCTS } from '../components/Pagination';
import { useQuery } from '@apollo/client';

/*
 * the order of methods called by apollo
 *   when what we need is not in cache : read -> merge -> read
 *   when what we need is in cache : read
 * */

export default function paginationField() {
  return {
    keyArgs: false,
    read(existing = [], { args, cache }) {
      /*
       *  when apollo tries to execute the query "allProducts", it will ask this read() function for the items.
       *  existing is the array of items which are already in cache, args is the arguments that the query got,
       *    and cache is a reference to the apollo cache.
       *
       *  here, we can do two things:
       *   1. return the items from the cache, if they exist
       *   2. return "false", which will trigger a network request
       */
      const { skip, first } = args;
      const dataFromCache = cache.readQuery({ query: COUNT_NUM_OF_PRODUCTS }); // reading the num of items on the page from cache
      let count;

      if (!dataFromCache) {
        const { data } = useQuery(COUNT_NUM_OF_PRODUCTS);
        count = data?._allProductsMeta?.count;
      } else {
        count = dataFromCache?._allProductsMeta?.count;
      }

      const page = skip / first + 1; // current page number
      const pages = Math.ceil(count / first); // the total number of pages

      const items = existing.slice(skip, skip + first).filter((x) => x); // check if we have existing items. the filter is to weed out undefined items

      if (items.length && items.length !== first && page === pages) {
        // to handle the case when there are items, but they are not equal to the ones we want
        // this only happens in the last page (we cant go get more because there arent more)
        // example: 5 products in total, perPage is 3. so last page will only have 2 instead of 3.
        return items;
      }

      if (items.length !== first) {
        // means that we dont have any items, gotta hit the server and get them
        return false;
      }

      if (items.length) {
        // means that there are items in the cache
        return items;
      }

      return false; // fall back to hit the server
    },
    merge(existing, incoming, { args }) {
      /*
       * when the apollo client makes a network request, and comes back with the data it got from the server,
       * this "merge" function is the one which will get executed, which basically decides how to put those items in
       * the cache, like where to put them, in what order, etc.
       *
       * existing is the existing apollo cache
       * incoming ths the data that we just got from the network
       * args are the arguments that were passed to the query
       */

      const { skip, first } = args;
      const merged = existing ? existing.slice(0) : []; // if there are items in the existing cache, then take them, otherwise, make it an empty array

      for (let i = skip; i < skip + incoming.length; i++) {
        merged[i] = incoming[i - skip];
      }
      /*
        this is to handle the case when the user directly visits nth page.
        in that case, then we need to have empty slots for the previous pages
        so the cache for allProducts will be "pageNum: cache"
      */
      return merged;
    },
  };
}
