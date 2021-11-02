//@ts-check

const { createNodeLogger, createNodeSys } = require('@stencil/core/sys/node');
const { createCompiler, loadConfig } = require('@stencil/core/compiler');


/**@typedef {import('@stencil/core/internal').Config} StencilConfig */

/**
 * @param {StencilConfig} config
 */

module.exports = async (config) => {

  // TODO build and dev server
  const logger = createNodeLogger({process});
  const sys = createNodeSys({process});
  const validated = await loadConfig({
    logger,
    sys,
    config,
  });
  const compiler = await createCompiler(validated.config);
  const results = await compiler.build();
  console.log('results', results);
}