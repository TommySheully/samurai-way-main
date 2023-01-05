import React from 'react';
import css from "./ProfileInfo.module.css"
import Preloader from "../../Preloader/Preloader";
import {profileType} from "../../../Redux/reducer/ProfileDataReduser";

type PropsType = {
    profile: profileType
}

const ProfileInfo = (props: PropsType) => {
    if (!props) {
        return <Preloader/>
    }

    return (
        <div className={css.descriptionBlock}>
            <img className={css.backImg}
                 src="https://sun9-88.userapi.com/impg/Yb3CROCd3_uwduaCMcUTmGdFv58w4HB3VuVnzg/KOylVH72HEo.jpg?size=905x661&quality=96&sign=47ec0b50464108c17a09f3f008bd41a5&type=album"
                 alt="fon"/>
            <div>
                <img className={css.ava}
                     src={props.profile.photos.large}
                     alt="ava"/>
            </div>
            ava
        </div>
    )
};

export default ProfileInfo;