import { SkillsAndTools } from "components/data/skills-tools"

export default function handler(req,res){
    res.status(200).json(SkillsAndTools)
}