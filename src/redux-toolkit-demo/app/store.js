const configureStore = require("@reduxjs/toolkit").configureStore;
const { getDefaultMiddleware } = require("@reduxjs/toolkit");
// const reduxLogger = require("redux-logger");
const cakeReducer = require("../app/features/cakes/cakeSlice");
const icecreamReducer = require("../app/features/icecream/icecreamSlice");

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
