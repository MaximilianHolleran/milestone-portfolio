import {useState, useEffect} from 'react';

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

    const [commentsList, setCommentsList]= useState([])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/reviews', {method:'POST', body:JSON.stringify(formData)});
        setCommentsList(prevCommentsList => [...prevCommentsList, formData]);
        // Reset formData if needed
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            comments: '',
            starRating: ''
        });
    };

    useEffect(()=>{
        fetch('/api/reviews')
        .then(response => response.json())
        .then(data => {setCommentsList(data)})
        .catch(error =>{console.log("Error fetching initial data:", error)})
        },[])

return(
    <div>
        <div className="review-form">
            <form onSubmit= {handleSubmit}>
            <h1>Review of Services Performed</h1>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="name">Client First Name:</label>
                <input className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="name">Client Last Name:</label>
                <input className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="name">Client Email:</label>
                <input className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="founded">Comments/Review</label>
                <input type="name" className="form-control" id="comments" name="comments" value={formData.comments} onChange={handleInputChange} required/>
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="starRating">Star Rating</label>
                <select name="starRating" id="starRating" className="starRating" value={formData.starRating} onChange={handleInputChange} required>
                            <option value="">Please select an option</option>
                            <option value="1">*</option>
                            <option value="2">**</option>
                            <option value="3">***</option>
                            <option value="4">****</option>
                            <option value="5">*****</option>
                </select>
            </div>
        
                <input className="btn btn-primary" type="submit" value="Submit Review" />
            </form>

        <div className="comment-wrapper">
                <div className="comment-section">
                    {/* Map over commentsList to display submitted comments */}
                    {commentsList.map((comment, index) => (
                        <div key={index} className="comment">
                            <p>First Name: {comment.firstName}</p>
                            <p>Last Name: {comment.lastName}</p>
                            <p>Email: {comment.email}</p>
                            <p>Comments: {comment.comments}</p>
                            <p>Star Rating: {'*'.repeat(parseInt(comment.starRating))}</p>
                        </div>
                    ))}
                </div>
            </div>
        
        </div>
    </div>
)

}

export default ReviewForm
