const {
  startCompositeService,
  onceOutputLineIs
} = require("composite-service");

const ready = ctx => onceOutputLineIs(ctx.output, "hi\n");

startCompositeService({
  windowsCtrlCShutdown: true,
  services: {
    node: {
      command: "node generic-service.js",
      ready
    },
    nodemon: {
      command: "nodemon generic-service.js",
      ready
    }
  }
});
