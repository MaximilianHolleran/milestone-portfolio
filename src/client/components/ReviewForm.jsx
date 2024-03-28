import {useState} from 'react';

function ReviewForm(){
    const [formData, setFormData] = useState(
        {

        firstName:'',
        lastName:'',
        email: '',
        comments: '',
        starRating: ''
        
}
)

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement what should happen on form submission
    console.log(formData);
};

return(
    <div>
        <div className="review-form">
            <form onSubmit= {handleSubmit}>
            <h1>Review of Services Performed</h1>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="name">Client First Name:</label>
                <input className="form-control" id="firstName" name="firstName" value="formData.firstName" onChange={handleInputChange} required />
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="name">Client Last Name:</label>
                <input className="form-control" id="lastName" name="lastName" value="formData.lastName" onChange={handleInputChange} required />
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="name">Client Email:</label>
                <input className="form-control" id="email" name="email" value="formData.email" onChange={handleInputChange} required />
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="founded">Comments/Review</label>
                <input type="name" className="form-control" id="comments" name="comments" value="formData.comments" onChange={handleInputChange} required/>
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="starRating">Star Rating</label>
                <select name="starRating" id="starRating" className="starRating" value="formData.starRating" onChange={handleInputChange} required>
                    <option value="">Please select an option</option>
                    <option value="type1">*</option>
                    <option value="type2">**</option>
                    <option value="type3">***</option>
                    <option value="type4">****</option>
                    <option value="type5">*****</option>
                </select>
            </div>
        
                <input className="btn btn-primary" type="submit" value="Request Referral" />
            </form>

        </div>
    </div>
)

}

export default ReviewForm