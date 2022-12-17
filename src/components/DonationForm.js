import DonationBtn from "./DonationBtn";
import CountryDropDown from "./CountryDropDown";

function DonationForm() {
  return (
    <div className="donation-block">
        <div className='section-constraint'>
            <form>
                <header><p>Donation details</p></header>
                <div className="donation-btn-container">
                  <DonationBtn text="10€"/>
                  <DonationBtn text="25€"/>
                  <DonationBtn text="50€"/>
                  <DonationBtn text="100€"/>
                  <DonationBtn text="Other"/>
                </div>
                <header><p>Information</p></header>
                <div className="inline-form-row">
                    <input placeholder='First Name' required></input>
                    <input placeholder='Last Name' required></input>
                </div>
                <input placeholder='Email address' required></input>
                <input placeholder='Address' required></input>
                <input placeholder='City' required></input>
                <div className="inline-form-row">
                  <input placeholder='State' required></input>
                  <input placeholder='Postal Code' required></input>
                </div>
                <div className="inline-form-row">
                  <input placeholder='Phone number' required></input>
                  <CountryDropDown />
                </div>
                <header><p>Credit card details</p></header>
                <div className="inline-form-row">
                  <input placeholder='Card Number' required></input>
                  <input placeholder='MM/AA' required></input>
                  <input placeholder='CVC' required></input>
                </div>
                <button className="btn">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default DonationForm;
