import chalk from "chalk";
const logger = {
  progress: (progress = 0, total = 100, barLength = 100, text = "") => {
    const percent = Math.round((progress / total) * 100);
    let bar = Array(Math.round((barLength * percent) / 100))
      .fill("◼")
      .join("");
    const emptyBar = Array(barLength - bar.length)
      .fill("◻")
      .join("");
    const cursor = percent < 100 ? chalk.white.bold("◧") : chalk.green.bold("◼");

    bar = bar.slice(0, -1) + cursor;

    const percentStr = percent.toFixed(1).toString() + "%";
    process.stdout.write(
      `\r${chalk.blue(chalk.bold(`⏱ `) + new Date().toTimeString().split(" ")[0])} ${chalk.green(
        bar
      )}${chalk.gray(emptyBar)} ${chalk.green.bold(percentStr)} ${chalk.green.bold(text)} `
    );
  },
  stdout: {
    clean() {
      try {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
      } catch (e) {
        process.stdout.write("\r\x1b[K");
      }
    },
    debug(...args) {
      // Clean line
      try {
        process.stdout.clearLine(0);
      } catch (e) {
        process.stdout.write("\r\x1b[K");
      }
      process.stdout.write(
        "\r" +
          chalk.blue(chalk.bold(`⚙ `) + new Date().toTimeString().split(" ")[0]) +
          " " +
          args.join(" ") +
          " "
      );
    },
    info(...args) {
      try {
        process.stdout.clearLine(0);
      } catch (e) {
        process.stdout.write("\r\x1b[K");
      }
      process.stdout.write(
        "\r" +
          chalk.cyan(chalk.bold(`ℹ `) + new Date().toTimeString().split(" ")[0]) +
          " " +
          args.join(" ") +
          " "
      );
    },

    warning(...args) {
      try {
        process.stdout.clearLine(0);
      } catch (e) {
        process.stdout.write("\r\x1b[K");
      }
      process.stdout.write(
        "\r" +
          chalk.yellow(chalk.bold(`⚠ `) + new Date().toTimeString().split(" ")[0]) +
          " " +
          args.join(" ") +
          " "
      );
    },
    success(...args) {
      try {
        process.stdout.clearLine(0);
      } catch (e) {
        process.stdout.write("\r\x1b[K");
      }
      process.stdout.write(
        "\r" +
          chalk.green(chalk.bold(`✔ `) + new Date().toTimeString().split(" ")[0]) +
          " " +
          args.join(" ") +
          " "
      );
    },
    error(...args) {
      try {
        process.stdout.clearLine(0);
      } catch (e) {
        process.stdout.write("\r\x1b[K");
      }
      process.stdout.write(
        "\r" +
          chalk.red(chalk.bold.bgRed(` ERROR `) + " " + new Date().toTimeString().split(" ")[0]) +
          " " +
          args.join(" ") +
          " "
      );
    },
  },
  debug: (...args) =>
    console.log(chalk.blue(chalk.bold(`⚙ `) + new Date().toTimeString().split(" ")[0]), ...args),
  info: (...args) =>
    console.log(chalk.cyan(chalk.bold(`ℹ `) + new Date().toTimeString().split(" ")[0]), ...args),
  warning: (...args) =>
    console.log(chalk.yellow(chalk.bold(`⚠ `) + new Date().toTimeString().split(" ")[0]), ...args),
  warn: (...args) =>
    console.log(chalk.yellow(chalk.bold(`⚠ `) + new Date().toTimeString().split(" ")[0]), ...args),
  success: (...args) =>
    console.log(chalk.green(chalk.bold(`✔ `) + new Date().toTimeString().split(" ")[0]), ...args),
  error: (...args) =>
    console.log(
      chalk.red(chalk.bold.bgRed(` ERROR `) + " " + new Date().toTimeString().split(" ")[0]),
      ...args
    ),
};

export default logger;
