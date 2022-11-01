const validateSchema = (schema) => {
    return (req, res, next) => {
        const {value, error} = schema.validate(req.body);

        if (error) return res.status(400).json(error);

        Object.assign(req, value);
        next();
    };
};


module.exports = validateSchema;

