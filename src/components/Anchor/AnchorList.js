import "./anchor.css"
import React from 'react';
import { Anchor } from "./Anchor.js"

export let AnchorList = (props) => {
        let anchors = props.anchors;
        return anchors.length > 0 ? <div className="anchors"> {anchors.map(anchor => <Anchor Y={anchor.Y} key={anchor.id}></Anchor>)}</div> : null;
}
