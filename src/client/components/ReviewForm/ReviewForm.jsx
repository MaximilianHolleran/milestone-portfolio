import {useState, useEffect} from 'react';
import './ReviewForm.css'


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

    const handleSubmit =(e) => {
        e.preventDefault();
        fetch('/api/reviews', {method:'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData)});
        setCommentsList(prevCommentsList => [...prevCommentsList, formData]);
        // Reset formData if needed
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            comments: '',
            starRating: ''
        });
        handleSubmit()
    };

    useEffect(() => {
        // Fetch initial data when the component mounts
        const fetchData = async () => {
            try {
                const response = await fetch('/api/reviews');
                if (!response.ok) {
                    throw new Error('Failed to fetch initial data');
                }
                const data = await response.json();
                setCommentsList(data);
            } catch (error) {
                console.error('Error fetching initial data:', error);
            }
        };
        fetchData(); // Call the fetchData function
    }, []);

return(
    <div>
        <div class="review-form">
            <form onSubmit= {handleSubmit}>
            <h1>Review of Services Performed</h1>
            <div class="form-group">
                <label htmlFor="name">Client First Name:</label>
                <input class="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
            </div>
            <div class="form-group">
                <label htmlFor="name">Client Last Name:</label>
                <input class="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="name">Client Email:</label>
                <input class="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="founded">Comments/Review</label>
                <input type="name" class="form-control" id="comments" name="comments" value={formData.comments} onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="starRating">Star Rating</label>
                <select name="starRating" id="starRating" className="starRating" value={formData.starRating} onChange={handleInputChange} required>
                            <option value="">Please select an option</option>
                            <option value="1">🔥</option>
                            <option value="2">🔥🔥</option>
                            <option value="3">🔥🔥🔥</option>
                            <option value="4">🔥🔥🔥🔥</option>
                            <option value="5">🔥🔥🔥🔥🔥</option>
                </select>
            </div>
        
                <input className="btn btn-primary" type="submit" value="Submit Review" />
            </form>

        <div className="comment-wrapper">
                <div className="comment-section">
                    {/* Map over commentsList to display submitted comments */}
                    {commentsList.map((comment, index) => (
                        <div key={index} className="form-group">
                            <p>First Name: {comment.firstName}</p>
                            <p>Last Name: {comment.lastName}</p>
                            <p>Email: {comment.email}</p>
                            <p>Comments: {comment.comments}</p>
                            <p>Star Rating: {'🔥'.repeat(parseInt(comment.starRating))}</p>
                        </div>
                    ))}
                </div>
            </div>
        
        </div>
    </div>
)

}

export default ReviewForm
