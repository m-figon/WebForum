import React, { Component } from 'react';
import './postList.css';
import commentImg from './orangeText.png';
import up from './orangeUp.png';
import down from './orangeDown.png';
import Comments from '../comments/comments.jsx';
class PostList extends Component {
    constructor() {
        super();
        this.state = ({
            comments: true,
            commentValue: "",
            tmpObject: {
                id: 0,
                user: 0,
                content: "",
                currentTime: "",
                tmpTime: ""
            },
            idValue: 0
        })
        this.addCommentValue = this.addCommentValue.bind(this);
        this.calculateDate = this.calculateDate.bind(this);
    }
    commentsSwitch() {
        if (this.state.comments) {
            this.setState({
                comments: false
            })
        } else {
            this.setState({
                comments: true
            })
        }
        console.log(this.state.comments);
    }
    addCommentValue(value1, value2) {
        this.setState({
            commentValue: value1,
            idValue: value2,

        })
        this.props.setStateHandler("comment", value1, "id", value2);
        //console.log(this.props.postListjson[value2].comments);
        const newArray = this.props.postListjson[value2].comments.concat({
            id: 10,
            user: this.props.logedName,
            content: value1
        });
        //console.log(newArray);
        this.setState(state => {
            const list = this.props.postListjson.map((item) => {
                if (item.id === value2) {
                    item.comments = newArray;
                }
            });
            return {
                list,
            };
        })
        //console.log(this.props.postListjson);
    }
    pointsChange(value, operation) {
        //console.log(value);
        //console.log(this.state.jsonArray[value])
        this.setState(state => {
            const list = this.props.postListjson.map((item) => {
                if (item.id === value) {
                    if (operation === "+") {
                        item.points += 0.5;
                    } else if (operation === "-") {
                        item.points -= 0.5;
                    }
                }
            });
            return {
                list,
            };
        })
    }
    calculateDate(value) {
        var dateDiference;
        function addEnding(value1,value2){
            if (dateDiference === 1) {
                dateDiference += value1;
            } else {
                dateDiference += value2;
            }
        }
        var currentDate = new Date();
        var postDate = new Date(value);
        dateDiference = Math.round((currentDate.getTime() - postDate.getTime()) / 86400000);
        if (dateDiference === 0) {
            dateDiference = Math.round((currentDate.getTime() - postDate.getTime()) / 3600000);
            addEnding(" hour ago"," hours ago");
            return dateDiference;
        } else if (dateDiference > 0 && dateDiference <= 31) {
            addEnding(" day ago"," days ago");
            return dateDiference;
        } else if (dateDiference > 31) {
            dateDiference = Math.round((currentDate.getTime() - postDate.getTime()) / 2592000000);
            addEnding(" month ago"," months ago");
            return dateDiference;
        }
    }
    render() {

        const display = this.props.postListjson.map((item) => {
            if ((this.props.selectValue === "none" && this.props.searchValue === item.title)) {
                return (<div class="post">
                    <div class="post-desc">
                        <div class="left">
                            <h1>{item.title} by {item.user} posted {this.calculateDate(item.date)}</h1>
                        </div>
                        <div id="right">
                            <h2 id="section" onClick={() => this.props.setStateHandler("section", item.section)}>{item.section}</h2>
                            <h2>{item.points} Points {item.comments.length} Comments</h2>
                        </div>
                    </div>
                    <p>{item.post}</p>
                    <div class="img">
                        <img alt="" src={item.src} />
                    </div>
                    <div class="post-buttons">
                        <img alt="" onClick={() => this.pointsChange(item.id, "+")} src={up} />
                        <img alt="" onClick={() => this.pointsChange(item.id, "-")} src={down} />
                        <img alt="" onClick={() => this.commentsSwitch()} src={commentImg} />
                    </div>
                    <Comments commentDate={this.calculateDate} commentHandler={this.addCommentValue} idNumber={item.id} logedAcc={this.props.logedName} commentState={this.state.comments} json={this.props.postListjson} />
                </div>);
            }
            else if (this.props.selectValue === "section" || (this.props.selectValue === "curiosities" && item.section === "curiosities") ||
                (this.props.selectValue === "fit" && item.section === "fit") ||
                (this.props.selectValue === "food" && item.section === "food") ||
                (this.props.selectValue === "films" && item.section === "films")) {
                return (<div class="post">
                    <div class="post-desc">
                        <div class="left">
                            <h1 id="post-title" onClick={() => this.props.setStateHandler("section", "none", "tmpSearch", item.title)}>{item.title} by {item.user} posted {this.calculateDate(item.date)}</h1>
                        </div>
                        <div id="right">
                            <h2 id="section" onClick={() => this.props.setStateHandler("section", item.section)}>{item.section}</h2>
                            <h2>{item.points} Points {item.comments.length} Comments</h2>
                        </div>
                    </div>
                    <p>{item.post}</p>
                    <div class="img">
                        <img alt="" src={item.src} />
                    </div>
                    <div class="post-buttons">
                        <img alt="" onClick={() => this.pointsChange(item.id, "+")} src={up} />
                        <img alt="" onClick={() => this.pointsChange(item.id, "-")} src={down} />
                        <img alt="" onClick={() => this.props.setStateHandler("section", "none", "tmpSearch", item.title)} src={commentImg} />
                    </div>
                </div>
                );
            }
        });
        if (this.props.selectValue === "none") {
            return (
                <div class="post-list-display">
                    <div class="post-list">
                        {display}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div class="post-list-display">
                    <div class="post-list-sign">
                        <h1>Posts</h1>
                    </div>
                    <div class="post-list">
                        {display}
                    </div>
                </div>
            );
        }

    }

}
export default PostList;
