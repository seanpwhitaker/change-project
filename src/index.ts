import { HttpFunction } from "@google-cloud/functions-framework";

export const validateTemperature: HttpFunction = async (req, res) => {
    try {
        if (req.body.temp < 100) {
            res.status(200).send("Temperature OK");
        } else {
            console.log('too hot');
            res.status(200).send("Too hot");
        }
    } catch (error) {
        //return an error
        console.log("got error: ", error);
        res.status(500).send(error);
    }
};