import React from 'react';
import s from './../Dialogs.module.css'

export type Message = {
    message: string;
    id: string;
    likesCount: number;
}

export const Message = (props: Message) => <div className={s.Message}>{props.message} {props.likesCount}</div>;
