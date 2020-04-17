import React, { useState } from "react";
import Icon from "../playlists/Icon";

export default {
  title: "Component/Icon",
  component: Icon
};

export const basic = () => {
  return (
    <>
      <Icon size="20px" name="angle-down" />
      <Icon size="20px" name="flickr-alt" viewBoxWidth="1133" />
      <Icon size="20px" name="mouse" viewBoxWidth="1133" />
    </>
  );
};
