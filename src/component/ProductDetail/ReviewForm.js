import React from 'react'
import Rating from '@material-ui/lab/Rating';
import {requestProductAddReview} from "../../queries/products";
import {haveTokens} from "../../helpers/auth";
import {usePatch} from "../../hooks/usePatch";
import {CustomAlert} from "../../helpers/alert";

const ReviewForm = ({product_id, getReviews}) => {
	const isLogin = haveTokens();
	const [formData, setFormData] = usePatch({
		rate: 0,
		review: ''
	});
	const newReview = (e) => {
		e.preventDefault();
		const PAYLOAD = {
			review: formData['review'],
			rate: formData['rate']
		}
		requestProductAddReview(PAYLOAD, product_id)
			.then(() => {
				setFormData({
					review: '',
					rate: 0
				})
				CustomAlert({
					icon: 'success',
					text: 'Your review was sent successfully.'
				});
				getReviews();
			})
			.catch(error => {
				console.log(error);
			})
	}

    return (
        <div className='ReviewForm'>
			{
				isLogin ?
					(
						<>
							<div className='ReviewForm__header'>
								<p>
									ADD A REVIEW
								</p>
							</div>
							<p className='ReviewForm__info'>Your email address will not be published. Required fields are marked *</p>
							<form className='ProductDetailReview__form' onSubmit={newReview}>
								<div className='ReviewForm__rate d-flex reviewform-row'>
									<label className='ReviewForm__label '>Your rating <span>*</span>:</label>
									<Rating
										name="simple-controlled"
										size="large"
										value={formData['rate']}
										onChange={(e, num) => {
											setFormData({rate: num});
										}}
									/>
								</div>
								<div className='ReviewForm__review reviewform-row' style={{display: 'block', width: '100%'}}>
									<label className='ReviewForm__label'>Your review <span>*</span>:</label>
									<textarea
										onChange={({target}) => setFormData({
											review: target.value
										})}
										value={formData['review']}
										style={{width: '100%'}} className='ReviewForm__textarea' required rows='4'/>
								</div>
								{/*<div className='ReviewForm__userInput reviewform-row'>*/}
								{/*	<div className='ReviewForm__userInput-div'>*/}
								{/*		<label className='ReviewForm__label' >Name <span>*</span>:</label>*/}
								{/*		<input className='ReviewForm__input' required/>*/}
								{/*	</div>*/}
								{/*	<div className='ReviewForm__userInput-div'>*/}
								{/*		<label className=' ReviewForm__label' >Email <span>*</span>:</label>*/}
								{/*		<input className='ReviewForm__input' required/>*/}
								{/*	</div>*/}
								{/*</div>*/}
								<button type='submit' className='btn third-btn'>
									SUBMIT
								</button>
							</form>
						</>
					)
					:
					(
						<h2>Please login to post a review.</h2>
					)
			}
        </div>
    )
}

export default ReviewForm
