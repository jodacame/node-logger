import logger from "./index.js";

logger.debug("This is a debug message");
logger.info("This is an info message");
logger.warning("This is a warning message");
logger.warn("This is a warn message");
logger.success("This is a success message");

logger.progress(70, 100, 100, "This is a progress message");
