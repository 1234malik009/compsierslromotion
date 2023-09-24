import React, { useState } from 'react';

function MemberForm() {
  // Initialize state variables for the form fields
  const [name, setName] = useState('');
  const [dob, setDOB] = useState('');
  const [members, setMembers] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions here, such as sending the data to a server or displaying it in the console.
    console.log('Name:', name);
    console.log('Date of Birth:', dob);
    console.log('Number of Family Members:', members);
  };

  return (
    <div>
      <h2>Member Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="members">Number of Family Members:</label>
          <input
            type="number"
            id="members"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MemberForm;
