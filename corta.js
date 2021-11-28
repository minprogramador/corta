
const corta = (date, start, end) => {
    return date.split(start)[1].split(end)[0];
};
module.exports = corta;
