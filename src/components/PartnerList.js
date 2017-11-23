import React, { Component } from 'react';

class PartnerList extends Component {
  render() {
    return(
      <div>
        <hr/>
      <p>
          {this.props.partners.items?this.props.partners.items.map((partner) => (
          <div className='box' style={{marginBottom: '20px'}}>
            <a href={partner.fields.url}><img style={{maxWidth: '100%'}}src={partner.fields.logoUrl}/></a>
          </div>)):''}

        </p>
      </div>
    )
  }
}

export default PartnerList;
