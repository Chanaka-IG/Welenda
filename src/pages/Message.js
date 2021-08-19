import React from 'react'
import Massage from '../assets/images/massage.png';
import './message.css'

export const Message = () => {
    return (
        <div className='messageContainer'>  
            <div className='messagetitle'>
                Message
            </div>
            <div className='messageImage'>
            <img src={Massage} alt='' width='250px' height='230px'/>
            </div>
            <div className="msgArea">
            <div className="form-area">
                <form className="form-content">
                        <div className="mb-3">
                            <label for="targetaudience" className="form-label">Target user</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">Customer</option>
                                <option value="2">Merchant</option>
                                <option value="3">Staff</option>
                            </select>
                            <div id="emailHelp" class="form-text">You can select any audience as you wish!</div>
                        </div>
                        <div className="mb-3">
                            <label for="Message" className="form-label">Message</label>
                            <input type="text" className="form-control" id="message" />
                        </div>
                        <div className="mb-3">
                            <label for="UserID" className="form-label">User-ID</label>
                            <input type="text" className="form-control" id="userID" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Send</button>
                </form>
             </div>
             </div>
        </div>
    )
}

export default Message;