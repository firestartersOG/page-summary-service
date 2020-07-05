import React from 'react';

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewText: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.apiPost = this.apiPost.bind(this);
  }

  onChange(event) {
    const newText = event.target.value
    this.setState({ reviewText: newText });
  }

  onSubmit(event) {
    event.preventDefault();
    this.apiPost(this.state.reviewText);
  }

  apiPost(req) {
    var business = window.location.pathname;
    business = business.substring(1, business.length-1);
    console.log(business);
    fetch('/api/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        review_id: '12345678901234567890aa',
        business_id: business,
        user: 'Andy',
        stars: 4,
        date: '2020-02-10',
        text: req,
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            <input
              placeholder='Write your review...'
              value={this.state.reviewText}
              onChange={this.onChange} />
          </label>
        </form>
      </div>
    );
  }
}

export default NewReview;
