'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
    onlytitre: async(values) => {
        console.log('values from onlytitre articles : ', values);
        // Extract values related to relational data.
        // const relations = _.pick(
        //     values,
        //     articles.associations.map((ast) => ast.alias)
        // );
        // const data = _.omit(
        //     values,
        //     articles.associations.map((ast) => ast.alias)
        // );

        // Create relational data and return the entry.
        return { lol: 'test' };
    },
};