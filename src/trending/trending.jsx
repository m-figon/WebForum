
import React, { Component } from 'react';
import './trending.css';
function Trending(props) {
    const display = props.json.map((item) => {
        if (item.points > 1000) {
            return (
                <div class="trend" onClick={() => props.setStateHandler("section", "none", "tmpSearch", item.title)}>
                    <img alt="" src={item.src} />
                    <div class="img-txt">
                        <h2>{item.user}</h2>
                        <h1>{item.title}</h1>
                    </div>
                </div>
            );
        }
    }
    );
    return (
        <div class="trending-display">
            <div class="trending-sign">
                <h1>Top of the week</h1>
            </div>
            <div class="trending">
                {display}
            </div>
        </div>

    );
}


export default Trending;