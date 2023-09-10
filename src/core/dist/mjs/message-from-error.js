/**
 * get the appropriate failure message from an error object to print
 * in a `not ok` test point when unhandled throws or rejections happen.
 */
export const messageFromError = (er) => {
    if (typeof er === 'string')
        return er;
    if (isErrorLike(er)) {
        const { name, message, stack, error, code } = er;
        if (error && typeof error == 'string')
            return error;
        const nc = name && typeof name === 'string' ? `${name}: ` : '';
        const ncCode = nc && typeof code === 'string' ? `${name} [${code}]: ` : '';
        if (message && typeof message === 'string')
            return message;
        if (typeof stack === 'string' && stack.trim()) {
            const lines = stack.trim().split('\n');
            return name && lines[0].startsWith(nc)
                ? lines[0].substring(nc.length)
                : ncCode && lines[0].startsWith(ncCode)
                    ? lines[0].substring(ncCode.length)
                    : lines[0];
        }
    }
    return 'unhandled error';
};
const isErrorLike = (er) => !!er &&
    typeof er === 'object' &&
    (er instanceof Error ||
        typeof er.error !== 'undefined' ||
        typeof er.name !== 'undefined' ||
        typeof er.message !== 'undefined' ||
        typeof er.stack !== 'undefined') &&
    (er.code === undefined ||
        typeof er.code === 'string');
//# sourceMappingURL=message-from-error.js.map