import proxy from "../../config/proxy";

export const pagesMockInterceptor = (url, options) => {
    const pagesProxy = proxy.pages;

    let realUrl = url;

    Object.keys(pagesProxy).map((key) => {
        if (url.match(key)) {
            const config = pagesProxy[key];
            realUrl = `${config.target}/${url}`;
        }
    });

    return {
        url: realUrl,
        options,
    };
};