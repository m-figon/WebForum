import React, { Component } from 'react';
import './postList.css';
import commentImg from './orangeText.png';
import up from './orangeUp.png';
import down from './orangeDown.png';
import Comments from '../comments/comments.jsx';
import { Link } from 'react-router-dom';
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
                tmpTime: "",
            },
            idValue: 0,
            currentDate: new Date()
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
            idValue: value2
        })
        this.props.setStateHandler("comment", value1, "id", value2);
        //console.log(this.props.postListjson[value2].comments);
        const newArray = this.props.postListjson[value2].comments.concat({
            id: 10,
            user: this.props.logedName,
            content: value1,
            date: new Date()
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
    componentDidMount() {
        setInterval(() => {
            this.setState({
                currentDate: new Date()
            });
        }, 5000);
    }
    calculateDate(timeValue) {
        var timeDif, timeSign;
        function timeCondition(condition, text, value) {
            if (condition) {
                timeDif = Math.floor(timeDif / value);
                if (timeDif === 1) {
                    timeSign = " posted " + timeDif + " " + text + " ago"
                } else {
                    timeSign = " posted " + timeDif + " " + text + "s ago"
                }
            }
        }
        const postDate = new Date(timeValue);
        timeDif = (this.state.currentDate.getTime() - postDate.getTime()) / 1000;
        timeCondition(timeDif >= 0 && timeDif < 60, "sec", 1);
        timeCondition(timeDif >= 60 && timeDif < 3600, "min", 60);
        timeCondition(timeDif >= 3600 && timeDif < 86400, "hour", 3600);
        timeCondition(timeDif >= 86400 && timeDif < 86400 * 30, "day", 86400);
        timeCondition(timeDif >= 86400 * 30 && timeDif < 86400 * 30 * 12, "month", 2592000);
        timeCondition(timeDif >= 86400 * 30 * 12, "year", 2592000 * 12);
        if (timeDif >= 0) {
            return (
                <>
                    {timeSign}
                </>
            )
        }
    }
    render() {
        let postButtonsId;
        let postId = window.location.pathname.substr(6, 1);
        let section = window.location.pathname.substr(1,);
        let sectionFlag, idFlag;
        console.log(section);
        if (this.props.logedName) {
            postButtonsId = "visible-buttons"
        } else {
            postButtonsId = "hidden-buttons"
        }
        const MySubComponent = (props) => {
            return (
                <>
                    <div class="post-desc">
                        <div class="left">
                            <Link to={`/post/${props.item.id}`} style={{ textDecoration: 'none' }} activeClassName="active">
                                <h1 id="post-title">{props.item.title} by {props.item.user}{this.calculateDate(props.item.date)}</h1>
                            </Link>
                        </div>
                        <div id="middle-part">
                            <Link to={`/${props.item.section}`} style={{ textDecoration: 'none' }} activeClassName="active">
                                <h2 id="section">{props.item.section}</h2>
                            </Link>
                        </div>
                        <div id="right-part">
                            <h2>{props.item.points} Points {props.item.comments.length} Comments</h2>
                        </div>
                    </div>
                    <p>{props.item.post}</p>
                    <div class="img">
                        <img alt="" src={props.item.src} />
                    </div>
                    <div id={postButtonsId} class="post-buttons">
                        <img id="icon" alt="" onClick={() => this.pointsChange(props.item.id, "+")} src={up} />
                        <img id="icon" alt="" onClick={() => this.pointsChange(props.item.id, "-")} src={down} />
                        <img id="icon" alt="" onClick={() => this.props.setStateHandler("section", "none", "tmpSearch", props.item.title)} src={commentImg} />
                    </div>
                </>
            );
        }
        const display1 = this.props.postListjson.map((item1) => {
            console.log('postId ' + postId);
            console.log('item id ' + item1.id);
            if (parseInt(item1.id) === parseInt(postId)) {
                idFlag = true;
                return (<div class="post">
                    <MySubComponent item={item1} />
                    <Comments commentDate={this.calculateDate} commentHandler={this.addCommentValue} idNumber={item1.id} logedAcc={this.props.logedName} commentState={this.state.comments} json={this.props.postListjson} />
                </div>);
            }
            else {
                return (null);
            }
        });
        const display2 = this.props.postListjson.map((item1) => {
            return (<div class="post">
                <MySubComponent item={item1} />
            </div>
            );
        });
        //section
        const display3 = this.props.postListjson.map((item1) => {
            if (item1.section === section) {
                sectionFlag = true;
                return (<div class="post">
                    <MySubComponent item={item1} />
                </div>
                );
            }
        });
        if (idFlag) {
            console.log(display1);
            console.log('should work')
            return (
                <div class="post-list-display">
                    <div class="post-list">
                        {display1}
                    </div>
                </div>
            );
        }

        else if(sectionFlag) {
            return (
                <div class="post-list-display">
                    <div class="post-list-sign">
                        <h1>Posts</h1>
                    </div>
                    <div class="post-list">
                        {display3}
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
                        {display2}
                    </div>
                </div>
            );
        }

    }

}
export default PostList;
