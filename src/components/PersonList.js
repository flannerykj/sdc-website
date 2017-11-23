import React, { Component } from 'react';

class PersonList extends Component {
  render() {
    return(
      <div>
        <hr/>
          {this.props.people.items?this.props.people.items.map((person, i) => {
          const {firstName, lastName, bio, position, twitter, profilePicture} = person.fields;
          return (
          <div className='card' style={{marginBottom: '20px'}} key={i}>
            <div className='card-content'>
              <div className='media'>
                <div className='media-left'>
                  <img style={{width: '100px'}} src={profilePicture} />
                </div>
                <div className='media-content'>
                  <h4 className='title is-3'>{firstName} {lastName}</h4>
                  <h5 className='subtitle is-5'>{position}</h5>

                </div>
              </div>

              <div className='content'>
                    {bio}
              </div>
            </div>
          </div>

          )}):''}


      </div>
    )
  }
}

export default PersonList ;
