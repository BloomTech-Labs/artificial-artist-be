module.exports = (req, res, next) => {
    const { username, password } = req.body;

    if (!username) {
        res.status(404).json({ message: 'Please provide your username!' });
    } else {
        if (!password) {
            res.status(404).json({ message: 'Please provide a password!' });
        } else {
            next();
        }
    }
};