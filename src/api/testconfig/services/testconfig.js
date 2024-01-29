'use strict';

/**
 * testconfig service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testconfig.testconfig');
