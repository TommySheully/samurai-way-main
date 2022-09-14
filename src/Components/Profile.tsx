import React from 'react';
import cssProfile from "./CSS/Profile.module.css"

const Profile = () => {
    return (
        <div className={cssProfile.content}>Main content
            <div>
                <img
                    src="https://sun9-88.userapi.com/impg/Yb3CROCd3_uwduaCMcUTmGdFv58w4HB3VuVnzg/KOylVH72HEo.jpg?size=905x661&quality=96&sign=47ec0b50464108c17a09f3f008bd41a5&type=album"
                    alt="fon"/>
            </div>
            <div className={cssProfile.item}>
                ava + description
            </div>
            <div className={cssProfile.item}>
                My post
                <div> New post</div>
            </div>
            <div className={cssProfile.item}>
                post 1
            </div>
            <div className={cssProfile.item}>
                post 2
            </div>
        </div>
    )
};

export default Profile;