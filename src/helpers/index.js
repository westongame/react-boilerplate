export const fakeXHR = (type, data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (type === 'get') {
                if (data) {
                    resolve(data);
                } else {
                    reject();
                }
            } else {
                resolve();
            }
        }, 500);
    });
};
