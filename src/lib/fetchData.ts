import CategoryService from "../services/categoryService";
import wrapPromise from "./wrapPromise";

function fetchData(url?: string) {
  try {
    const res = CategoryService.getTotalSpentTime("?id=12568ffcab");
    // const res = api();
    return wrapPromise(Promise.resolve(res));
  } catch (error) {
    wrapPromise(Promise.reject(error));
  }
}

// function api() {
//   return new Promise(async (resolve, reject) => {
//     const res = CategoryService.getTotalSpentTime("?id=12568ffcab");
//     setTimeout(() => {
//       resolve(Promise.resolve(res));
//     }, 3500);
//   });
// }

export default fetchData;
