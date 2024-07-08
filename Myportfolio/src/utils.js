/* Dynameic changes*/
export const getImageUrl = (path) =>{
    return new URL(`/assets/${path}`, import.meta.url).href;
};

// NOTE: META.URL takes the base url of webiste and then append