import { ContentTitle } from "@components/ContentTitle/ContentTitle"
import { Javascript, Node, React, Css, Electron, Typescript, Mongodb, Sass, Html } from "@icons/index";

import './skills.scss';

export const Skill = () => {
    return (
        <div className="skills">
            <div className="skills__content">
                <ContentTitle title="Habilidades" />
                <div className="rounded-card rounded-card--javascript">
                    <Javascript />
                    <span>Javascript</span>
                </div>
                <div className="rounded-card rounded-card--css">
                    <Css />
                    <span>
                        CSS
                    </span>
                </div>
                <div className="rounded-card rounded-card--html">
                    <Html />
                    <span>
                        HTML
                    </span>
                </div>
                <div className="rounded-card rounded-card--react">
                    <React />
                    <span>
                        React
                    </span>
                </div>
                <div className="rounded-card rounded-card--node">
                    <Node />
                    <span>Node js</span>
                </div>
                <div className="rounded-card rounded-card--electron">
                    <Electron />
                    <span>Electron js</span>
                </div>
                <div className="rounded-card rounded-card--react">
                    <React />
                    <span>React Native</span>
                </div>
                <div className="rounded-card rounded-card--typescript">
                    <Typescript />
                    <span>Typescript</span>
                </div>
                <div className="rounded-card rounded-card--mongodb">
                    <Mongodb />
                    <span>Mongodb</span>
                </div>
                <div className="rounded-card rounded-card--sass">
                    <Sass />
                    <span>Sass</span>
                </div>
            </div>
        </div>
    )
}
