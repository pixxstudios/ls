const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => {
    if (err) {
        console.log(err.message);
        return;
    }

    console.log(filenames);
});
