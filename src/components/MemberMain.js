import React from 'react';
import MemberDetail from './MemberDetail';

function MemberMain() {
  const memberData = {
    name:'Brad Waston',
    email:'brad@gmail.com',
    phoneNo:'07878787878',
    dob:'1976-12-27',
    memberNo:'12345678',
    updated_at:'2021-03-20',
    createtion_date:'2021-03-20',
    status:'Active',
  }

  return (
    <div className="App">
      <MemberDetail memberData={memberData} />
    </div>
  );
}

export default MemberMain;