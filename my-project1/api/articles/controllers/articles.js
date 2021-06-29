'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

// ctx.request.body POST params in BODY
// ctx.params GET/POST with params URL
module.exports = {
    /**
     * show params.
     *
     * @return {Object}
     */

    onlyTitre: async ctx => {
        return strapi.services.articles.onlytitre(ctx.params);
    },
};