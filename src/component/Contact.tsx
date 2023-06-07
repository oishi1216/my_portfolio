import React, { useState } from "react";
import { forwardRef } from "react";
import { ContainerProps } from "../types/Props";
import { SlideScaleChange } from "../hooks/useSlideScaleChange";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { common } from "../styles/common";
import emailjs from '@emailjs/browser';

export const Contact = forwardRef<HTMLDivElement, ContainerProps>(
  ({ id, isIntersecting }, ref) => {

    const [name, setName] = useState<string>('');
    const [mail, setMail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY )
      .then((result) => {
        alert('message sent successfully...');
        console.log(result.text);
      },(error) => {
        console.log(error.text);
      });

    return (
      <div id={id} ref={ref} css={common.wrapper}>
        <SlideScaleChange
          isIntersecting={isIntersecting}
        >
          <div css={common.contentWrapper}></div>
        </SlideScaleChange>
      </div>
    );
  }
);
