import { RoundedCard, RoundedCardProps } from "@components/RoundedCard/RoundedCard";
import { skillList } from './SkillList';

import './skills.scss';

export const Skill = () => {

    return (
        <div className="skills fade-in">
            <div className="skills__content">
                {
                    skillList.map((skill: RoundedCardProps, index: number) => {
                        return (
                            <RoundedCard key={index} {...skill} />
                        )
                    }
                    )
                }
            </div>

        </div>
    )
}
