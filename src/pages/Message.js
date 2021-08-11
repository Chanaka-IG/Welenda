import React from 'react'
import Massage from '../assets/images/massage.png';


export const Message = () => {
    return (
        <div className='messageContainer'>  
            <div className='messagetitle'>
                Message
            </div>
            <div className='messageImage'>
            <img src={Massage} alt='' width='250px' height='230px'/>
            </div>
            
            <div className="messageContainer__form">
                <div className='messageContainer__input'>
                    <label for="selectaudience" className='messageContainer__label'>Select Audience  </label>
                    <select name="audience" id="audience" className='messageContainer__inputField'>
                        <option value="sellers">Sellers</option>
                        <option value="buyers">Buyers</option>
                    </select>
                </div>
                <div className='messageContainer__input'>
                    <label for='description' className='messageContainer__label'>Description</label>
                    <textarea id="description" name="description" className='messageContainer__inputField' rows='10' placeholder="Type the message description here.." required></textarea>
                </div>
            </div>
            <div className='messagebutton'>
                  
                    <input className='sendButton' type='submit' name='send' value='Send'/>
            </div>
        </div>
    )
}

export default Message;