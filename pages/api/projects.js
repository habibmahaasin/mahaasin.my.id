import { Projects } from "components/data/project"

export default function handler(req,res){
    res.status(200).json(Projects)
}