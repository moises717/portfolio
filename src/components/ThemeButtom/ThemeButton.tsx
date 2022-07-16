import { LightningOn, LightningOff } from "../../icons";

import './ThemeButton.scss'

interface Props {
    onClick: () => void;
    isLightningOn: boolean;
}


const ThemeButton = ({ onClick, isLightningOn }: Props) => {

    return (
        <div className="btn-theme"  >
            {!isLightningOn ? <LightningOff onClick={onClick} /> : <LightningOn onClick={onClick} />}
        </div>
    )
}

export default ThemeButton