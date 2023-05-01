

function Card({avatar, nickname, postImage, text}) {
  return (
    <div className='card col-md-5 border-sm shadow-sm mt-1' style={{ 'border-radius': '0px'}}>

      <div className='card-header bg-white d-flex'>
        <img src={avatar} className='avatar' />
        <p className='text-sm-start fs-6 fw-bolder m-1'>{nickname}</p>
      </div>
      <div className='card-body p-0'>
        <img src={postImage} className='img-fluid'/>
      </div>

      <div className='card-footer bg-white'>

        <div className='text-body-dark'>
            <span className='p-1 fs-4'>
              <i class="bi bi-heart"></i>
            </span>
            <span className='p-1 fs-4'>
              <i class="bi bi-chat"></i>
            </span>
            <span className='p-1 fs-4'>
              <i class="bi bi-telegram"></i>
            </span>
        </div>
        <span className='fw-bolder card-footer-text'>3k me gustas</span>
        <div className='card-footer-text text-lowercase lh-sm'>
          <span className='fw-bolder'>{nickname} </span>
          <span>Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.</span>
        </div>

      </div>
    </div>
  )
}



export default Card
