import winston from "winston";
import moment from "moment";
export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.colorize({
            all:true
        }),
        winston.format.label({
            label:'[LOGGER]'
        }),
        winston.format.timestamp({
            format:"YY-MM-DD HH:MM:SS"
        }),
        winston.format.printf(
            info => ` ${info.label}  ${info.timestamp}  ${info.level} : ${info.message}`
        )
    ),
    defaultMeta: { service: 'auth-service' },
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        process.env.NODE_ENV === "production" ?
            new winston.transports.File({ filename: `${moment().format("YYYY-MM-DD HH:mm:ss")}-log.log` }) :
            null,
    ].filter(Boolean),
});
