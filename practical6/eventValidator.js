// Keelan Matthews 21549967
module.exports.checkDate = date => {
    const month = date.split('/')[1];
    const day = date.split('/')[2];

    const monthInt = parseInt(month);
    const dayInt = parseInt(day);

    if (!monthInt == 9) return false;
    if (!(dayInt > 9 && dayInt <= 21)) return false;
    return true;
}

module.exports.checkName = name => {
    const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return !regex.test(name);
}