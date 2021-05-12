import { App } from "./App";
import { createServer } from "http";

const server = createServer(App);
const port = normalizePort(process.env.PORT!)

server.listen(port);

function normalizePort(val: string): any {
    let port = parseInt(val, 10);
    if (isNaN(port)) return val;
    if (port >= 0) return port;
    return false;
}

function onError(error: any) {
    if (error.syscall !== "listen") throw error;
    const bind = typeof port === "string" ?
        "Pipe " + port :
        "Port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }

    function onListening() {
        let addr = server.address();
        var bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr!.port;
        console.log('Listening on ' + bind);
    }
}
