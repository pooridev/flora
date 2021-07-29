import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import commenticon from '../../assets/image/home/icon/comment.png'
import shareicon from '../../assets/image/home/icon/share.png'

const BlogCard = ({src,title,author,dateday,authorepic,comment,cap,cat,dateMounth}) => {
    const [hoverimg, sethoverimg] = useState(false)
    return (
        <div className={`BlogCard d-flex ${hoverimg}`} onMouseOver={()=>sethoverimg(true)} onMouseLeave={()=>sethoverimg(false)}>
           <div className='BlogCard__img  '>
               <img src={src}/>
                <div className='BlogCard__date'>
                     <p className='BlogCard__date--day'>
                         {
                             dateday
                         }
                     </p>
                     <p className='BlogCard__date--month'>
                     {dateMounth}
                     </p>
                    </div>  
                   {hoverimg &&
                        <div className='hoverShadow'>
                        <div class="spinner">
                          <div class="bounce1"></div>
                          <div class="bounce2"></div>
                          <div class="bounce3"></div>
                        </div>
                        </div>
                   }
           </div>
           <div className='BlogCard__inf'>
               <div className='BlogCard__inf--head'>
                   <p>
                     {cat}
                   </p>
               </div>
               <h4>
                   {title}
               </h4>
               <div className='center BlogCard__inforow'>
                   <img className='BlogCard__authorpic' src={authorepic} alt='authore'/>
                   <p className='BlogCard__authorname'>{author}</p>
                   <div className='d-flex relative' >
                      <img className='BlogCard__comment' src={commenticon} alt='comment'/>
                       <div className='comment-num center'><p>{comment}</p></div>
                    </div>
                <img src={shareicon} alt='share ' className='BlogCard__share'/>
             </div>
             <p className='BlogCard__caption'>{cap}</p>
             <Link to='' className='BlogCard__link'>
                    CONTINUE READING
                </Link>
           </div>
        </div>
    )
}

export default BlogCard
