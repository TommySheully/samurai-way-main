import React, {useState} from 'react';
import s from './../Dialogs.module.css'

export type MessageType = {
    message: string;
    id: string;
    likesCount: number;
}

export const Message = (props: MessageType) => <div className={s.Message}>{props.message} {props.likesCount}</div>;
