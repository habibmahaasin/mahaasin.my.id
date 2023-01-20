import { Experience } from "components/data/experience"

export default function handler(req,res){
    res.status(200).json(Experience)
}