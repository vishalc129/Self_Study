import cx from 'classnames';
import { Component } from 'react';

export default class LikeDislikeButtonComponent extends Component {

  state = { liked: false, likeCount: 100, disliked: false, dislikeCount: 25 };

  setLike = () => {
    // this.setState({
    //   likeCount:this.state.liked ? this.state.likeCount - 1 : this.state.likeCount + 1,
    //   liked:!this.state.liked
    // });

    this.setState((state) => {
      state.likeCount = state.liked ? state.likeCount - 1 : state.likeCount + 1;
      state.liked = !state.liked;
      if (state.disliked) {
        state.disliked = false;
        state.dislikeCount = state.dislikeCount - 1;
      }
      return state;
    })
  }

  setDislike = () => {
    this.setState((state) => {
      state.dislikeCount = state.disliked ? state.dislikeCount - 1 : state.dislikeCount + 1;
      state.disliked = !state.disliked;
      if (state.liked) {
        state.liked = false;
        state.likeCount = state.likeCount - 1;
      }
      return state;
    })
  }

  render() {

    return (
      <>
        <div>
          <button onClick={this.setLike} className={cx({ "like-button": true, liked: this.state.liked })}>
            Like | <span className="likes-counter">{this.state.likeCount}</span>
          </button>

          <button onClick={this.setDislike} className={cx({ "dislike-button": true, disliked: this.state.disliked })}>
            Dislike | <span className="dislikes-counter">{this.state.dislikeCount}</span>
          </button>
        </div>
        <style>{`
                .like-button, .dislike-button {
                font-size: 1rem;
                padding: 5px 10px;
                color: #585858;
                }

                .liked, .disliked {
                font-weight: bold;
                color: #1565c0;
                }
          `}
        </style>
      </>
    );
  }
}
