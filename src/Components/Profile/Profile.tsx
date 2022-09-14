import React from 'react';
import cssProfile from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={cssProfile.content}>Main content
            <div>
                <img
                    src="https://sun9-88.userapi.com/impg/Yb3CROCd3_uwduaCMcUTmGdFv58w4HB3VuVnzg/KOylVH72HEo.jpg?size=905x661&quality=96&sign=47ec0b50464108c17a09f3f008bd41a5&type=album"
                    alt="fon"/>
            </div>

            <MyPosts/>
        </div>
    )
};

export default Profile;