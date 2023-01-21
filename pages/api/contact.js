import { Contact } from "components/data/contact"

export default function handler(req,res){
    res.status(200).json(Contact)
}