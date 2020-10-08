module.exports = client => {
    const prompt = process.openStdin()
    prompt.addListener('data', async res => {
        const x = res.toString().trim().split(/ +/g).join(' ')
        console.log(await eval(x));
    });
}
