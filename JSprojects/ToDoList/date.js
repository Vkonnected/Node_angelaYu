exports.getDate= ()=> {
    let today = new Date();

    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    }
    const day = today.toLocaleDateString('en-US', options)
    return day;
}