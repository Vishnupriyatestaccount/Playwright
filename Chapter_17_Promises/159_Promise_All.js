let checkAuth = Promise.resolve("Auth Ok")
let checkDB = Promise.resolve("DB Ok")
let checkCache = Promise.resolve("Cache Ok")

Promise.all([checkAuth, checkDB, checkCache]).then(function(results) {
    console.log("All the checks are fine");
});

Promise.allSettled([
    Promise.resolve("Test A Passed"),
    Promise.reject("Test B failed"),
    Promise.resolve("Test C Passed")
]).then(function(results) {
    results.forEach(function(r, i) {
        const statusInfo = r.status === 'fulfilled' ? r.value : r.reason;
        console.log("Test " + (i + 1) + ", " + r.status + " - " + statusInfo);
    });
});