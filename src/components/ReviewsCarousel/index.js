// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
    state = {index: 0}

  onLeftClick = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    } else {
      this.setState({index: 3})
    }
  }

  onRightClick = () => {
    const {index} = this.state
    if (index < 3) {
      this.setState(prevState => ({index: prevState.index + 1}))
    } else {
      this.setState({index: 0})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <>
        <div className="bg-container">
          <h1 className="review-heading">Reviews</h1>
          <img src={imgUrl} alt={username} className="profile-image" />
          <p className="user-name">{username}</p>
          <div className="arrows-container">
            <button
              type="button"
              onClick={this.onLeftClick}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <button
              type="button"
              onClick={this.onRightClick}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="company-name">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </>
    )
  }
}
export default ReviewsCarousel
