import { HttpFunction } from "@google-cloud/functions-framework";
import { Change, ChangeRequest } from "./models/money";
import { getChange } from "./util/moneyUtil";

export const validateTemperature: HttpFunction = async (req, res) => {
    const { provided, total } = req.body as ChangeRequest;

    try {
        const totalChange: Change = getChange({ provided, total });
        res.status(200).send(totalChange);
    } catch (error) {
        console.log(error);
        res.status(500).send({error});
    }

};