import React from 'react';
import myprofile from '../images/profile.jpg'
import image1 from '../images/id1.png'
import image2 from '../images/id2.jpg'
import './User_profile.css';


const UserProfile = () => {
    return(
        <>

<div className = "user__profile__container">

<div className="user__profile__content">
<div className="row gutters">
<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
<div className="card h-100">
	<div className="card-body">
		<div className="account-settings">
			<div className="user-profile">
				 
                <img src={myprofile} alt="Avatar" class="avatar" />
				 
				<h5 className="user-name">Chanaka Prasad</h5>
				<h6 className="user-email">anc@gmail.com</h6>
			</div>
			<div className="about">
				<h5>About</h5>
				<p>Im looking forward to connect as a seller with you</p>
			</div>
		</div>
	</div>
</div>
</div>
<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
<div className="card h-100">
	<div className="card-body">
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 className="mb-6 text-primary">Personal Details</h6>
			</div>
			<div className="col-xl-6 col-lg- col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="fullName">Full Name</label>
					<input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="eMail">Email</label>
					<input type="email" className="form-control" id="eMail" placeholder="Enter email ID" />
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="phone">Phone</label>
					<input type="text" className="form-control" id="phone" placeholder="Enter phone number" />
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="website">Website URL</label>
					<input type="url" className="form-control" id="website" placeholder="Website url" />
				</div>
			</div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="website">Website URL</label>
					<input type="url" className="form-control" id="website" placeholder="Website url" />
				</div>
			</div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="website">Website URL</label>
					<input type="url" className="form-control" id="website" placeholder="Website url" />
				</div>
			</div>
		</div>
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 className="mt-3 mb-2 text-primary">Nic details</h6>
			</div>
            <div className="row ml-2 mt-2" >
                 <div className="card mr-5" style={{width: '40%'}}>
                    <img className="card-img-top" src={image1} alt=""/>
                    <div className="card-body">
                        <h5 className="text-center" >First side</h5>
                    </div>
                  </div>
                  <div className="card ml-5" style={{width: '40%', marginLeftL:120}}>
                    <img className="card-img-top" src={image2} alt="" />
                    <div className="card-body">
                        <h5 className="text-center" >Second side</h5>
                    </div>
                  </div>
            </div>
           
		
		</div>
        
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div className="text-right">
                    <div className="user__profile__button">
                           <button type="button" id="submit" name="submit" className="btn btn-primary mr-4 ">Add</button>
                     </div>
                     <div className="user__profile__button">
                           <button type="button" id="submit" name="submit" className="btn btn-danger ml-4">Remove</button>
                     </div>    
					
				
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
</div>
</div>
       </> 
    )
}

export default UserProfile