(async function () {
    let result;
    result = await new Promise(function (resolve) {
        https.request("https://www.jslint.com/jslint.js", function (res) {
            result = "";
            res.on("data", function (chunk) {
                result += chunk;
            }).on("end", function () {
                resolve(result);
            }).setEncoding("utf8");
        }).end();
    });
    result = jslint(result);
    result.warnings.forEach(function ({
        formatted_message
    }) {
        console.error(formatted_message);
    });
}());
